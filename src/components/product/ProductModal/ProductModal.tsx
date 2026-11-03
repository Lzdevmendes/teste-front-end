import { useEffect, useRef, useState } from 'react'
import type { Product } from '../../../types/product'
import { formatCurrency } from '../../../utils/formatCurrency'
import { QuantityStepper } from '../../ui/QuantityStepper/QuantityStepper'
import styles from './ProductModal.module.scss'

interface Props {
  product: Product | null
  onClose: () => void
  onAdd: (product: Product, quantity: number) => void
}

export function ProductModal({ product, onClose, onAdd }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (product && !dialog.open) {
      setQuantity(1)
      dialog.showModal()
    }
    if (!product && dialog.open) dialog.close()
  }, [product])

  return (
    <dialog
      ref={dialogRef}
      className={styles.dialog}
      aria-labelledby="modal-title"
      onClose={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      {product && (
        <div className={styles.content}>
          <button type="button" className={styles.close} aria-label="Fechar" onClick={onClose}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 5l14 14M19 5 5 19" />
            </svg>
          </button>
          <img
            className={styles.photo}
            src={product.photo}
            alt={product.productName}
            width={150}
            height={190}
          />
          <div className={styles.details}>
            <h2 id="modal-title" className={styles.title}>
              {product.productName}
            </h2>
            <p className={styles.price}>{formatCurrency(product.price)}</p>
            <p className={styles.description}>{product.descriptionShort}</p>
            <a className={styles.link} href="#detalhes">
              Veja mais detalhes do produto &gt;
            </a>
            <div className={styles.actions}>
              <QuantityStepper value={quantity} onChange={setQuantity} />
              <button
                type="button"
                className={styles.buy}
                onClick={() => {
                  onAdd(product, quantity)
                  onClose()
                }}
              >
                Comprar
              </button>
            </div>
          </div>
        </div>
      )}
    </dialog>
  )
}
