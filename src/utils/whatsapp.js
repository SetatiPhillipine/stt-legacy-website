import { COMPANY } from '../data/content.js'

// ─────────────────────────────────────────────────────────────
// WHATSAPP QUOTE LOGIC
// Builds the message from the form values, URL-encodes it and
// returns the wa.me link. QuoteForm.jsx opens this link on submit.
// ─────────────────────────────────────────────────────────────
export function buildQuoteMessage({ name, phone, location, service, message }) {
  return [
    'Hello STT Legacy,',
    '',
    'I would like to request a quote.',
    '',
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Location: ${location}`,
    `Service: ${service}`,
    '',
    'Message:',
    message,
    '',
    'Thank you.',
  ].join('\n')
}

export function buildQuoteUrl(values) {
  const text = buildQuoteMessage(values)
  return `${COMPANY.whatsappUrl}?text=${encodeURIComponent(text)}`
}

export function buildQuoteMailto(values) {
  const subject = `Quote request: ${values.service}`
  const body = buildQuoteMessage(values)
  return `mailto:${COMPANY.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}
