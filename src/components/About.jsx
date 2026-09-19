import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { HIGHLIGHTS } from '../data/content.js'
import Icon from './Icon.jsx'

const ease = [0.22, 1, 0.36, 1]

export default function About() {
  const ref = useRef(null)
  const reduce = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  // Subtle parallax movement
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? ['0%', '0%'] : ['-5%', '5%']
  )

  return (
    <section
      id="about"
      className="section about"
      ref={ref}
      aria-labelledby="about-title"
    >
      <div className="container about__grid">

        {/* STT LEGACY LOGO */}
        <motion.div
          className="about__media about__logo-box"
          initial={{ clipPath: 'inset(0 100% 0 0)' }}
          whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1.1, ease }}
        >
          <motion.div
            className="about__shift about__logo-wrap"
            style={{ y }}
          >
            <img
              src="/images/STT LOGO.jpeg"
              alt="STT Legacy Carpentry and Construction logo"
              className="about__logo"
            />
          </motion.div>
        </motion.div>

        {/* ABOUT INFORMATION */}
        <motion.div
          className="about__content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{
            duration: 0.8,
            ease,
            delay: 0.15,
          }}
        >
          <h2 id="about-title" className="h2">
            BUILDING A LEGACY THAT LASTS
          </h2>

          <p className="about__text">
            STT Legacy Carpentry and Construction (Pty) Ltd was founded in
            2026 with one mission: to build work that lasts. We are based in
            Johannesburg and serve clients across Gauteng. As a new company,
            we bring modern techniques, honest pricing, and a promise to treat
            every project like our own legacy. No job too small.
          </p>

          <ul className="highlights">
            {HIGHLIGHTS.map((h) => (
              <li key={h.label} className="highlight">
                <Icon
                  name={h.icon}
                  size={22}
                  strokeWidth={1.7}
                />
                <span>{h.label}</span>
              </li>
            ))}
          </ul>
        </motion.div>

      </div>
    </section>
  )
}