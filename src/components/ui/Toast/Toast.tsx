import styles from './Toast.module.scss'

interface Props {
  message: string
}

export function Toast({ message }: Props) {
  return (
    <div className={styles.region} role="status" aria-live="polite">
      {message && <p className={styles.toast}>{message}</p>}
    </div>
  )
}
