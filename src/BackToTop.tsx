import { useEffect, useState } from 'react'
import { tx, type Lang } from './data'
import './back-to-top.css'

export default function BackToTop({ lang }: { lang: Lang }) {
  const [visible, setVisible] = useState(false)
  const label = tx('Back to top', '返回顶部', 'Volver arriba')[lang]

  useEffect(() => {
    const update = () => setVisible(window.scrollY > 400)
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  function backToTop() {
    // Keep keyboard navigation at the destination when this button hides.
    document.querySelector<HTMLAnchorElement>('.header .logo')?.focus({ preventScroll: true })
    window.scrollTo({
      top: 0,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
    })
  }

  return <button type="button" className="back-to-top" hidden={!visible}
    aria-label={label} title={label} onClick={backToTop}>
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 21V3M5.5 9.5 12 3l6.5 6.5" />
    </svg>
  </button>
}
