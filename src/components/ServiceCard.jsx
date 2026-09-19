import { motion } from 'framer-motion'
import Icon from './Icon.jsx'
import Photo from './Photo.jsx'

export default function ServiceCard({ service, index }) {
  return (
    <motion.article
      className="card"
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="card__media">
        <Photo src={service.photo.src} alt={service.photo.alt} className="card__img" />
        <span className="card__icon">
          <Icon name={service.icon} size={24} strokeWidth={1.7} />
        </span>
      </div>
      <div className="card__body">
        <h3 className="card__title">{service.title}</h3>
        <p className="card__text">{service.text}</p>
      </div>
    </motion.article>
  )
}
