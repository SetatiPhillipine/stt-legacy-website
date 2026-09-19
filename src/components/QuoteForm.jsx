import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SERVICE_OPTIONS } from '../data/content.js'
import { buildQuoteUrl } from '../utils/whatsapp.js'

const EMPTY = { name: '', phone: '', location: '', service: '', message: '' }

function validate(v) {
  const e = {}
  if (v.name.trim().length < 2) e.name = 'Enter your full name.'
  const digits = v.phone.replace(/[\s()+-]/g, '')
  if (!/^\d{9,15}$/.test(digits)) e.phone = 'Enter a valid phone number, e.g. 067 047 8198.'
  if (v.location.trim().length < 2) e.location = 'Enter the suburb or town of the job.'
  if (!v.service) e.service = 'Choose the service you need.'
  if (v.message.trim().length < 10) e.message = 'Tell us a little about the job (at least 10 characters).'
  return e
}

// Defined outside QuoteForm so inputs keep focus while typing.
function Field({ id, label, error, children }) {
  return (
    <div className={`field ${error ? 'field--error' : ''}`}>
      <label htmlFor={`field-${id}`}>{label}</label>
      {children}
      <AnimatePresence>
        {error && (
          <motion.p
            id={`err-${id}`}
            className="field__error"
            role="alert"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function QuoteForm() {
  const [values, setValues] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [sentUrl, setSentUrl] = useState('')

  const update = (field) => (e) => {
    const next = { ...values, [field]: e.target.value }
    setValues(next)
    if (touched[field] || Object.keys(errors).length) setErrors(validate(next))
  }
  const blur = (field) => () => {
    setTouched((t) => ({ ...t, [field]: true }))
    setErrors(validate(values))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const found = validate(values)
    setErrors(found)
    setTouched({ name: true, phone: true, location: true, service: true, message: true })
    if (Object.keys(found).length) {
      const first = Object.keys(found)[0]
      document.getElementById(`field-${first}`)?.focus()
      return
    }
    const url = buildQuoteUrl({
      name: values.name.trim(),
      phone: values.phone.trim(),
      location: values.location.trim(),
      service: values.service,
      message: values.message.trim(),
    })
    setSentUrl(url)
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  const err = (f) => (touched[f] || Object.keys(errors).length ? errors[f] : undefined)

  const aria = (id) => ({
    id: `field-${id}`,
    'aria-invalid': !!err(id),
    'aria-describedby': err(id) ? `err-${id}` : undefined,
    onBlur: blur(id),
    onChange: update(id),
    value: values[id],
  })

  return (
    <form className="form" onSubmit={onSubmit} noValidate aria-label="Request a quote">
      <div className="form__row">
        <Field id="name" error={err('name')} label="Full name">
          <input type="text" autoComplete="name" placeholder="Your full name" {...aria('name')} />
        </Field>
        <Field id="phone" error={err('phone')} label="Phone / WhatsApp number">
          <input type="tel" autoComplete="tel" inputMode="tel" placeholder="e.g. 067 047 8198" {...aria('phone')} />
        </Field>
      </div>
      <div className="form__row">
        <Field id="location" error={err('location')} label="Location">
          <input type="text" autoComplete="address-level2" placeholder="Suburb or town" {...aria('location')} />
        </Field>
        <Field id="service" error={err('service')} label="Service needed">
          <select {...aria('service')}>
            <option value="" disabled>Select a service</option>
            {SERVICE_OPTIONS.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </Field>
      </div>
      <Field id="message" error={err('message')} label="Message">
        <textarea rows="5" placeholder="Describe the job: what you need done, size, timing." {...aria('message')} />
      </Field>

      <button type="submit" className="btn btn--primary btn--block">REQUEST A QUOTE</button>
      <p className="form__note">
        This opens WhatsApp with your details filled in. Press send there to reach us.
      </p>

      <AnimatePresence>
        {sentUrl && (
          <motion.p
            className="form__sent"
            role="status"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            WhatsApp opened with your quote request. If nothing opened,{' '}
            <a href={sentUrl} target="_blank" rel="noopener noreferrer">tap here to open WhatsApp</a>.
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  )
}
