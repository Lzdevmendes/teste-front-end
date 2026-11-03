import { FacebookIcon, InstagramIcon, LinkedinIcon } from '../../ui/icons/icons'
import { Logo } from '../../ui/Logo/Logo'
import styles from './Footer.module.scss'

const COLUMNS = [
  { title: 'Institucional', links: ['Sobre Nós', 'Movimento', 'Trabalhe conosco'] },
  { title: 'Ajuda', links: ['Suporte', 'Fale Conosco', 'Perguntas Frequentes'] },
  { title: 'Termos', links: ['Termos e Condições', 'Política de Privacidade', 'Troca e Devolução'] },
]

const SOCIALS = [
  { label: 'Instagram', Icon: InstagramIcon },
  { label: 'Facebook', Icon: FacebookIcon },
  { label: 'LinkedIn', Icon: LinkedinIcon },
]

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.main}>
        <div className={styles.brand}>
          <Logo />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <ul className={styles.socials}>
            {SOCIALS.map(({ label, Icon }) => (
              <li key={label}>
                <a href="#" aria-label={label}>
                  <Icon />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav className={styles.columns} aria-label="Rodapé">
          {COLUMNS.map(({ title, links }) => (
            <section key={title}>
              <h2>{title}</h2>
              <ul>
                {links.map((link) => (
                  <li key={link}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </nav>
      </div>
      <p className={styles.copy}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </footer>
  )
}
