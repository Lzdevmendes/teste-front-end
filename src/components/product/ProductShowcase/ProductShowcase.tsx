import { useId, useState } from 'react'
import type { Product } from '../../../types/product'
import { Carousel } from '../../ui/Carousel/Carousel'
import { CategoryTabs } from '../CategoryTabs/CategoryTabs'
import { ProductCard } from '../ProductCard/ProductCard'
import styles from './ProductShowcase.module.scss'

interface Props {
  title: string
  products: Product[]
  status: 'loading' | 'success' | 'error'
  tabs?: string[]
  subtitle?: string
  onSelect: (product: Product, trigger: HTMLElement) => void
}

export function ProductShowcase({ title, products, status, tabs, subtitle, onSelect }: Props) {
  const headingId = useId()
  const [activeTab, setActiveTab] = useState(tabs?.[0] ?? '')

  return (
    <section className={styles.showcase} aria-labelledby={headingId}>
      <header className={styles.header}>
        <h2 id={headingId} className={styles.title}>
          {title}
        </h2>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </header>

      {tabs && <CategoryTabs tabs={tabs} active={activeTab} onChange={setActiveTab} />}

      {status === 'loading' && (
        <p className={styles.feedback} role="status">
          Carregando produtos...
        </p>
      )}
      {status === 'error' && (
        <p className={styles.feedback} role="alert">
          Não foi possível carregar os produtos. Tente novamente mais tarde.
        </p>
      )}
      {status === 'success' && products.length === 0 && (
        <p className={styles.feedback}>Nenhum produto encontrado para a sua busca.</p>
      )}
      {status === 'success' && products.length > 0 && (
        <Carousel label={title}>
          {products.map((product, index) => (
            <li key={`${product.productName}-${index}`}>
              <ProductCard product={product} onSelect={onSelect} />
            </li>
          ))}
        </Carousel>
      )}
    </section>
  )
}
