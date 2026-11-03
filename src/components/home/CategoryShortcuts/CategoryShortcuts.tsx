import { useState, type ComponentType, type SVGProps } from 'react'
import {
  DevicesIcon,
  DrinkIcon,
  FashionIcon,
  HealthIcon,
  SportIcon,
  StoreIcon,
  ToolsIcon,
} from '../../ui/icons/icons'
import styles from './CategoryShortcuts.module.scss'

interface Category {
  name: string
  Icon: ComponentType<SVGProps<SVGSVGElement>>
}

const CATEGORIES: Category[] = [
  { name: 'Tecnologia', Icon: DevicesIcon },
  { name: 'Supermercado', Icon: StoreIcon },
  { name: 'Bebidas', Icon: DrinkIcon },
  { name: 'Ferramentas', Icon: ToolsIcon },
  { name: 'Saúde', Icon: HealthIcon },
  { name: 'Esportes e Fitness', Icon: SportIcon },
  { name: 'Moda', Icon: FashionIcon },
]

export function CategoryShortcuts() {
  const [active, setActive] = useState(CATEGORIES[0].name)

  return (
    <nav className={styles.nav} aria-label="Compre por categoria">
      <ul className={styles.list}>
        {CATEGORIES.map(({ name, Icon }) => (
          <li key={name}>
            <button
              type="button"
              className={styles.item}
              aria-pressed={name === active}
              onClick={() => setActive(name)}
            >
              <span className={styles.tile}>
                <Icon />
              </span>
              <span className={styles.name}>{name}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
