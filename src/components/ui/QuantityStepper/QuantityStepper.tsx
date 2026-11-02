import styles from './QuantityStepper.module.scss'

interface Props {
  value: number
  min?: number
  max?: number
  onChange: (value: number) => void
}

export function QuantityStepper({ value, min = 1, max = 99, onChange }: Props) {
  return (
    <div className={styles.stepper} role="group" aria-label="Quantidade">
      <button
        type="button"
        aria-label="Diminuir quantidade"
        disabled={value <= min}
        onClick={() => onChange(value - 1)}
      >
        &minus;
      </button>
      <output aria-live="polite">{String(value).padStart(2, '0')}</output>
      <button
        type="button"
        aria-label="Aumentar quantidade"
        disabled={value >= max}
        onClick={() => onChange(value + 1)}
      >
        +
      </button>
    </div>
  )
}
