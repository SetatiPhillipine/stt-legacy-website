import { motion } from 'framer-motion'
import { PHOTOS } from '../data/content.js'
import { scrollToId } from '../utils/scroll.js'
import Photo from './Photo.jsx'

const ease = [0.22, 1, 0.36, 1]

export default function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      {/* Background photo: slow cinematic zoom 105% → 100% */}
      <motion.div
        className="hero__bg"
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.6, ease }}
      >
        <Photo src={PHOTOS.hero.src} alt={PHOTOS.hero.alt} eager className="hero__img" />
      </motion.div>
      <div className="hero__overlay" aria-hidden="true" />
      <div className="hero__ruler" aria-hidden="true" />

      <div className="container hero__content">
        <h1 id="hero-title" className="hero__title">
          <motion.span
            className="hero__line"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.25 }}
          >
            BUILDING STRONG
          </motion.span>
          <motion.span
            className="hero__line"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.4 }}
          >
            LEGACIES FOR THE FUTURE
          </motion.span>
        </h1>

        <motion.p
          className="hero__text"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.85 }}
        >
          STT Legacy is a new generation construction company in Johannesburg. We deliver quality
          carpentry, roofing, building &amp; renovations. On time. On budget. Let&rsquo;s build your legacy.
        </motion.p>

        <motion.div
          className="hero__actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 1.2 }}
        >
          <button className="btn btn--primary" onClick={() => scrollToId('contact')}>
            GET A FREE QUOTE
          </button>
          <button className="btn btn--ghost" onClick={() => scrollToId('services')}>
            VIEW SERVICES
          </button>
        </motion.div>
      </div>
    </section>
  )
}
