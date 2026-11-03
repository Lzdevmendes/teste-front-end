import styles from './Logo.module.scss'

interface Props {
  className?: string
}

export function Logo({ className }: Props) {
  return (
    <a href="/" className={`${styles.logo} ${className ?? ''}`} aria-label="Econverse, página inicial">
      <span className={styles.mark} aria-hidden="true">
        ec
      </span>
      <span className={styles.word} aria-hidden="true">
        onverse
      </span>
    </a>
  )
}
