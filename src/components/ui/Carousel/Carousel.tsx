import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react'
import styles from './Carousel.module.scss'

interface Props {
  label: string
  children: ReactNode
}

export function Carousel({ label, children }: Props) {
  const trackRef = useRef<HTMLUListElement>(null)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(false)

  const updateLimits = useCallback(() => {
    const track = trackRef.current
    if (!track) return
    setCanPrev(track.scrollLeft > 1)
    setCanNext(track.scrollLeft + track.clientWidth < track.scrollWidth - 1)
  }, [])

  useEffect(() => {
    updateLimits()
    window.addEventListener('resize', updateLimits)
    return () => window.removeEventListener('resize', updateLimits)
  }, [updateLimits, children])

  function move(direction: 1 | -1) {
    const track = trackRef.current
    const item = track?.firstElementChild as HTMLElement | null
    if (!track || !item) return
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0
    track.scrollBy({ left: direction * (item.offsetWidth + gap), behavior: 'smooth' })
  }

  return (
    <div className={styles.carousel} role="group" aria-roledescription="carrossel" aria-label={label}>
      <button
        type="button"
        className={`${styles.arrow} ${styles.prev}`}
        aria-label="Produtos anteriores"
        disabled={!canPrev}
        onClick={() => move(-1)}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M15 4 7 12l8 8" />
        </svg>
      </button>
      <ul className={styles.track} ref={trackRef} onScroll={updateLimits}>
        {children}
      </ul>
      <button
        type="button"
        className={`${styles.arrow} ${styles.next}`}
        aria-label="Próximos produtos"
        disabled={!canNext}
        onClick={() => move(1)}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="m9 4 8 8-8 8" />
        </svg>
      </button>
    </div>
  )
}
