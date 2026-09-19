import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { COMPANY, LOGO, NAV_LINKS } from '../data/content.js'
import { scrollToId } from '../utils/scroll.js'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Highlight the section currently in view
  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.id)
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id))
      },
      { rootMargin: '-45% 0px -50% 0px' }
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const go = (id) => {
    setOpen(false)
    // wait a tick so scroll lock is released before scrolling
    setTimeout(() => scrollToId(id), 30)
  }

  return (
    <header className={`navbar ${scrolled || open ? 'navbar--solid' : ''}`}>
      <div className="navbar__inner container">
        <a
          href="#home"
          className="brand"
          onClick={(e) => { e.preventDefault(); go('home') }}
          aria-label={`${COMPANY.shortName} home`}
        >
          <img src={LOGO.mark} alt="" className="brand__mark" width="88" height="48" />
          <span className="brand__text">
            <span className="brand__name">STT LEGACY</span>
            <span className="brand__sub">Carpentry &amp; Construction</span>
          </span>
        </a>

        <nav className="nav-desktop" aria-label="Primary">
          {NAV_LINKS.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={`nav-link ${active === l.id ? 'is-active' : ''}`}
              onClick={(e) => { e.preventDefault(); go(l.id) }}
            >
              {l.label}
            </a>
          ))}
          <button className="btn btn--primary btn--sm" onClick={() => go('contact')}>
            GET A QUOTE
          </button>
        </nav>

        <button
          className="burger"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          <motion.span animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }} transition={{ duration: 0.25 }} />
          <motion.span animate={{ opacity: open ? 0 : 1 }} transition={{ duration: 0.15 }} />
          <motion.span animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }} transition={{ duration: 0.25 }} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            className="mobile-menu"
            aria-label="Mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mobile-menu__inner container">
              {NAV_LINKS.map((l, i) => (
                <motion.a
                  key={l.id}
                  href={`#${l.id}`}
                  className={`mobile-link ${active === l.id ? 'is-active' : ''}`}
                  onClick={(e) => { e.preventDefault(); go(l.id) }}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 * i + 0.1, duration: 0.3 }}
                >
                  {l.label}
                </motion.a>
              ))}
              <button className="btn btn--primary btn--block" onClick={() => go('contact')}>
                GET A QUOTE
              </button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
