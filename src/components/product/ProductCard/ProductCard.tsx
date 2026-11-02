import type { Product } from '../../../types/product'
import { formatCurrency, formatInstallment } from '../../../utils/formatCurrency'
import styles from './ProductCard.module.scss'

interface Props {
  product: Product
  onSelect: (product: Product, trigger: HTMLElement) => void
}

// O JSON nao traz preco antigo. Exibimos o valor "de" como referencia visual do layout.
const OLD_PRICE_FACTOR = 1.03

export function ProductCard({ product, onSelect }: Props) {
  const { productName, descriptionShort, photo, price } = product

  return (
    <article className={styles.card}>
      <button
        type="button"
        className={styles.info}
        aria-label={`Ver detalhes de ${productName}`}
        onClick={(event) => onSelect(product, event.currentTarget)}
      >
        <img
          className={styles.photo}
          src={photo}
          alt={productName}
          width={190}
          height={190}
          decoding="async"
        />
        <span className={styles.description}>{descriptionShort}</span>
        <span className={styles.oldPrice}>
          <span className="sr-only">Preco anterior </span>
          {formatCurrency(price * OLD_PRICE_FACTOR)}
        </span>
        <span className={styles.price}>{formatCurrency(price)}</span>
        <span className={styles.installment}>{formatInstallment(price)}</span>
        <span className={styles.shipping}>Frete grátis</span>
      </button>
      <button
        type="button"
        className={styles.buy}
        onClick={(event) => onSelect(product, event.currentTarget)}
      >
        Comprar
      </button>
    </article>
  )
}
