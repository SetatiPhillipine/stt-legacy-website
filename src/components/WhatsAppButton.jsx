import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { COMPANY } from '../data/content.js'

export default function WhatsAppButton() {
  return (
    <motion.a
      className="wa-float"
      href={COMPANY.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with STT Legacy on WhatsApp"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.8, duration: 0.5 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.96 }}
    >
      <MessageCircle size={28} aria-hidden="true" />
    </motion.a>
  )
}
