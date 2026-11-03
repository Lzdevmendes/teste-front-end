import { useEffect, useMemo, useRef, useState } from 'react'
import { BrandList } from './components/home/BrandList/BrandList'
import { CategoryShortcuts } from './components/home/CategoryShortcuts/CategoryShortcuts'
import { Hero } from './components/home/Hero/Hero'
import { PartnerBanners } from './components/home/PartnerBanners/PartnerBanners'
import { BenefitsBar } from './components/layout/BenefitsBar/BenefitsBar'
import { Footer } from './components/layout/Footer/Footer'
import { Header } from './components/layout/Header/Header'
import { Newsletter } from './components/layout/Newsletter/Newsletter'
import { ProductModal } from './components/product/ProductModal/ProductModal'
import { ProductShowcase } from './components/product/ProductShowcase/ProductShowcase'
import { Toast } from './components/ui/Toast/Toast'
import { useProducts } from './hooks/useProducts'
import type { Product } from './types/product'

const CATEGORY_TABS = ['Celular', 'Acessórios', 'Tablets', 'Notebooks', 'TVs', 'Ver todos']
const TOAST_DURATION_MS = 3000

function normalize(text: string) {
  return text.normalize('NFD').replace(/\p{M}/gu, '').toLowerCase()
}

export default function App() {
  const { products, status } = useProducts()
  const [selected, setSelected] = useState<Product | null>(null)
  const [query, setQuery] = useState('')
  const [cartCount, setCartCount] = useState(0)
  const [toast, setToast] = useState('')
  const lastTrigger = useRef<HTMLElement | null>(null)

  const visibleProducts = useMemo(() => {
    const term = normalize(query.trim())
    if (!term) return products
    return products.filter((product) => normalize(product.productName).includes(term))
  }, [products, query])

  useEffect(() => {
    if (!toast) return
    const timer = setTimeout(() => setToast(''), TOAST_DURATION_MS)
    return () => clearTimeout(timer)
  }, [toast])

  function openModal(product: Product, trigger: HTMLElement) {
    lastTrigger.current = trigger
    setSelected(product)
  }

  function closeModal() {
    setSelected(null)
    lastTrigger.current?.focus()
  }

  function addToCart(product: Product, quantity: number) {
    setCartCount((count) => count + quantity)
    setToast(`${quantity}x ${product.productName} adicionado ao carrinho`)
  }

  const showcaseProps = { products: visibleProducts, status, onSelect: openModal }

  return (
    <>
      <BenefitsBar />
      <Header cartCount={cartCount} query={query} onQueryChange={setQuery} />
      <main>
        <h1 className="sr-only">Econverse: ofertas de tecnologia</h1>
        <Hero />
        <CategoryShortcuts />

        <div id="produtos">
          <ProductShowcase title="Produtos relacionados" tabs={CATEGORY_TABS} {...showcaseProps} />
          <PartnerBanners />
          <ProductShowcase title="Produtos relacionados" subtitle="Ver todos" {...showcaseProps} />
          <PartnerBanners />
        </div>

        <BrandList />
        <ProductShowcase title="Produtos relacionados" subtitle="Ver todos" {...showcaseProps} />
      </main>
      <Newsletter />
      <Footer />
      <ProductModal product={selected} onClose={closeModal} onAdd={addToCart} />
      <Toast message={toast} />
    </>
  )
}
