import { useState, type FormEvent } from 'react'
import styles from './Newsletter.module.scss'

export function Newsletter() {
  const [sent, setSent] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSent(true)
  }

  return (
    <section className={styles.newsletter} aria-labelledby="newsletter-title">
      <div className={styles.inner}>
        <div className={styles.text}>
          <h2 id="newsletter-title">Inscreva-se na nossa newsletter</h2>
          <p>
            Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.
          </p>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.fields}>
            <label className="sr-only" htmlFor="news-nome">
              Nome
            </label>
            <input id="news-nome" name="nome" type="text" placeholder="Digite seu nome" required />
            <label className="sr-only" htmlFor="news-email">
              E-mail
            </label>
            <input
              id="news-email"
              name="email"
              type="email"
              placeholder="Digite seu e-mail"
              required
            />
            <button type="submit">Inscrever</button>
          </div>
          <label className={styles.terms}>
            <input type="checkbox" name="termos" required />
            Aceito os termos e condições
          </label>
          {sent && (
            <p className={styles.feedback} role="status">
              Inscrição enviada. Obrigado!
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
