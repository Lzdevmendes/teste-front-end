import styles from './Hero.module.scss'

export function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <img
        className={styles.background}
        src={`${import.meta.env.BASE_URL}img/hero.webp`}
        alt=""
        width={1440}
        height={390}
        fetchPriority="high"
      />
      <div className={styles.content}>
        <h2 id="hero-title" className={styles.title}>
          Venha conhecer nossas promoções
        </h2>
        <p className={styles.offer}>
          <strong>50% Off</strong> nos produtos
        </p>
        <a href="#produtos" className={styles.cta}>
          Ver produto
        </a>
      </div>
    </section>
  )
}
