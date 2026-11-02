import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import type { Product } from '../../../types/product'
import { ProductCard } from './ProductCard'

const product: Product = {
  productName: 'Iphone 11 PRO MAX BRANCO 1',
  descriptionShort: 'Iphone 11 PRO MAX BRANCO 1',
  photo: 'https://exemplo.com/foto.png',
  price: 15000,
}

describe('ProductCard', () => {
  it('exibe preco e parcelamento formatados', () => {
    render(<ProductCard product={product} onSelect={() => {}} />)

    expect(screen.getByText('R$ 15.000,00')).toBeInTheDocument()
    expect(screen.getByText('ou 2x de R$ 7.500,00 sem juros')).toBeInTheDocument()
  })

  it('envia o produto ao clicar em Comprar', async () => {
    const onSelect = vi.fn()
    render(<ProductCard product={product} onSelect={onSelect} />)

    await userEvent.click(screen.getByRole('button', { name: 'Comprar' }))

    expect(onSelect).toHaveBeenCalledWith(product, expect.any(HTMLElement))
  })

  it('envia o produto ao clicar na area de informacoes', async () => {
    const onSelect = vi.fn()
    render(<ProductCard product={product} onSelect={onSelect} />)

    await userEvent.click(screen.getByRole('button', { name: /Ver detalhes de/ }))

    expect(onSelect).toHaveBeenCalledTimes(1)
  })
})
