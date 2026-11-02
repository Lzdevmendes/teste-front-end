import styles from './CategoryTabs.module.scss'

interface Props {
  tabs: string[]
  active: string
  onChange: (tab: string) => void
}

export function CategoryTabs({ tabs, active, onChange }: Props) {
  return (
    <ul className={styles.tabs} aria-label="Categorias">
      {tabs.map((tab) => (
        <li key={tab}>
          <button
            type="button"
            className={styles.tab}
            aria-pressed={tab === active}
            onClick={() => onChange(tab)}
          >
            {tab}
          </button>
        </li>
      ))}
    </ul>
  )
}
