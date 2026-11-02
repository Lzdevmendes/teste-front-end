import { BoxIcon, CartIcon, CrownIcon, HeartIcon, SearchIcon, UserIcon } from '../../ui/icons/icons'
import { Logo } from '../../ui/Logo/Logo'
import styles from './Header.module.scss'

const NAV_ITEMS = [
  'Todas categorias',
  'Supermercado',
  'Livros',
  'Moda',
  'Lançamentos',
  'Ofertas do dia',
]

interface Props {
  cartCount: number
  query: string
  onQueryChange: (value: string) => void
}

export function Header({ cartCount, query, onQueryChange }: Props) {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    document.getElementById('produtos')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={styles.header}>
      <div className={styles.top}>
        <Logo className={styles.logo} />
        <form className={styles.search} role="search" onSubmit={handleSubmit}>
          <label htmlFor="busca" className="sr-only">
            Buscar produtos
          </label>
          <input
            id="busca"
            type="search"
            placeholder="O que você está buscando?"
            value={query}
            onChange={(event) => onQueryChange(event.target.value)}
          />
          <button type="submit" aria-label="Buscar">
            <SearchIcon />
          </button>
        </form>
        <ul className={styles.actions}>
          <li>
            <button type="button" aria-label="Meus pedidos">
              <BoxIcon />
            </button>
          </li>
          <li>
            <button type="button" aria-label="Favoritos">
              <HeartIcon />
            </button>
          </li>
          <li>
            <button type="button" aria-label="Minha conta">
              <UserIcon />
            </button>
          </li>
          <li>
            <button type="button" aria-label={`Carrinho, ${cartCount} itens`}>
              <CartIcon />
              {cartCount > 0 && <span className={styles.badge}>{cartCount}</span>}
            </button>
          </li>
        </ul>
      </div>

      <nav className={styles.nav} aria-label="Principal">
        <ul>
          {NAV_ITEMS.map((item) => (
            <li key={item}>
              <a href="#produtos" className={item === 'Ofertas do dia' ? styles.highlight : undefined}>
                {item}
              </a>
            </li>
          ))}
          <li>
            <a href="#produtos" className={styles.subscription}>
              <CrownIcon />
              Assinatura
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
