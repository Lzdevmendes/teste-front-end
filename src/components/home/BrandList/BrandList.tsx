import { Logo } from '../../ui/Logo/Logo'
import styles from './BrandList.module.scss'

const BRANDS = ['marca-1', 'marca-2', 'marca-3', 'marca-4', 'marca-5']

export function BrandList() {
  return (
    <section className={styles.section} aria-labelledby="marcas-titulo">
      <h2 id="marcas-titulo" className={styles.title}>
        Navegue por marcas
      </h2>
      <ul className={styles.list}>
        {BRANDS.map((brand) => (
          <li key={brand} className={styles.brand}>
            <Logo className={styles.logo} />
          </li>
        ))}
      </ul>
    </section>
  )
}
