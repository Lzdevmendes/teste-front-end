import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import type { Product } from '../../../types/product'
import { ProductModal } from './ProductModal'

const product: Product = {
  productName: 'IPHONE 13 MINI 1',
  descriptionShort: 'Descrição curta do produto',
  photo: 'https://exemplo.com/foto.png',
  price: 9000,
}

describe('ProductModal', () => {
  it('mostra os dados do produto selecionado', () => {
    render(<ProductModal product={product} onClose={() => {}} onAdd={() => {}} />)

    expect(screen.getByRole('heading', { name: 'IPHONE 13 MINI 1' })).toBeInTheDocument()
    expect(screen.getByText('R$ 9.000,00')).toBeInTheDocument()
    expect(screen.getByText('Descrição curta do produto')).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'IPHONE 13 MINI 1' })).toBeInTheDocument()
  })

  it('chama onClose ao clicar em fechar', async () => {
    const onClose = vi.fn()
    render(<ProductModal product={product} onClose={onClose} onAdd={() => {}} />)

    await userEvent.click(screen.getByRole('button', { name: 'Fechar' }))

    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('adiciona a quantidade escolhida ao carrinho e fecha', async () => {
    const onAdd = vi.fn()
    const onClose = vi.fn()
    render(<ProductModal product={product} onClose={onClose} onAdd={onAdd} />)

    await userEvent.click(screen.getByRole('button', { name: 'Aumentar quantidade' }))
    await userEvent.click(screen.getByRole('button', { name: 'Comprar' }))

    expect(onAdd).toHaveBeenCalledWith(product, 2)
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('altera a quantidade e respeita o minimo de 1', async () => {
    render(<ProductModal product={product} onClose={() => {}} onAdd={() => {}} />)

    const decrease = screen.getByRole('button', { name: 'Diminuir quantidade' })
    expect(decrease).toBeDisabled()

    await userEvent.click(screen.getByRole('button', { name: 'Aumentar quantidade' }))

    expect(screen.getByText('02')).toBeInTheDocument()
    expect(decrease).toBeEnabled()
  })
})
