import { motion } from 'framer-motion'
import { MessageCircle, Mail, MapPin, Phone } from 'lucide-react'
import { COMPANY } from '../data/content.js'
import QuoteForm from './QuoteForm.jsx'

export default function Contact() {
  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="container contact__grid">
        <motion.div
          className="contact__intro"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 id="contact-title" className="h2">READY TO START YOUR PROJECT?</h2>
          <p className="contact__text">Tell us what you need and we&rsquo;ll get back to you with a quote.</p>

          <div className="contact__actions">
            <a className="btn btn--primary" href={COMPANY.whatsappUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle size={18} aria-hidden="true" /> WHATSAPP US
            </a>
            <a className="btn btn--ghost" href={`mailto:${COMPANY.email}`}>
              <Mail size={18} aria-hidden="true" /> EMAIL US
            </a>
          </div>

          <ul className="contact__details">
            <li><Mail size={18} aria-hidden="true" /><a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a></li>
            <li><Phone size={18} aria-hidden="true" /><a href={COMPANY.whatsappUrl} target="_blank" rel="noopener noreferrer">{COMPANY.phoneDisplay}</a></li>
            <li><MapPin size={18} aria-hidden="true" /><span>{COMPANY.location}, serving all of Gauteng</span></li>
          </ul>
        </motion.div>

        <motion.div
          className="contact__form"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        >
          <QuoteForm />
        </motion.div>
      </div>
    </section>
  )
}
