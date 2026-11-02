import styles from './PartnerBanners.module.scss'

const BANNERS = [
  { id: 'banner-1', title: 'Parceiros', text: 'Lorem ipsum dolor sit amet, consectetur' },
  { id: 'banner-2', title: 'Parceiros', text: 'Lorem ipsum dolor sit amet, consectetur' },
]

export function PartnerBanners() {
  return (
    <section className={styles.section} aria-label="Parceiros">
      <ul className={styles.list}>
        {BANNERS.map(({ id, title, text }) => (
          <li key={id} className={styles.banner}>
            <img
              src={`${import.meta.env.BASE_URL}img/banner.jpg`}
              alt=""
              width={634}
              height={261}
              loading="lazy"
            />
            <div className={styles.content}>
              <h3>{title}</h3>
              <p>{text}</p>
              <a href="#" className={styles.cta}>
                Confira
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
