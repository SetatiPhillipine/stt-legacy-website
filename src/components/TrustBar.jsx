import { motion } from 'framer-motion'
import { TRUST } from '../data/content.js'
import Icon from './Icon.jsx'

export default function TrustBar() {
  return (
    <section className="trust" aria-label="Why choose STT Legacy">
      <motion.ul
        className="container trust__list"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-40px' }}
        variants={{ show: { transition: { staggerChildren: 0.08 } } }}
      >
        {TRUST.map((t) => (
          <motion.li
            key={t.label}
            className="trust__item"
            variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
          >
            <Icon name={t.icon} size={22} strokeWidth={1.6} />
            <span>{t.label}</span>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  )
}
