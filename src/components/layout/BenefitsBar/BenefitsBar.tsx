import { CardIcon, ShieldIcon, TruckIcon } from '../../ui/icons/icons'
import styles from './BenefitsBar.module.scss'

const BENEFITS = [
  { Icon: ShieldIcon, strong: '100% segura', before: 'Compra ', after: '' },
  { Icon: TruckIcon, strong: 'Frete grátis', before: '', after: ' acima de R$ 200' },
  { Icon: CardIcon, strong: 'Parcele', before: '', after: ' suas compras' },
]

export function BenefitsBar() {
  return (
    <aside className={styles.bar} aria-label="Benefícios da loja">
      <ul className={styles.list}>
        {BENEFITS.map(({ Icon, strong, before, after }) => (
          <li key={strong} className={styles.item}>
            <Icon className={styles.icon} />
            <span>
              {before}
              <strong>{strong}</strong>
              {after}
            </span>
          </li>
        ))}
      </ul>
    </aside>
  )
}
