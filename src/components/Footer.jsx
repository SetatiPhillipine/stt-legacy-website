import { COMPANY, LOGO } from '../data/content.js'
import { scrollToId } from '../utils/scroll.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <img src={LOGO.full} alt="STT Legacy Carpentry and Construction logo" className="footer__logo" width="150" height="135" loading="lazy" />
        </div>

        <div className="footer__info">
          <p className="footer__company">{COMPANY.name}</p>
          <p className="footer__slogan">WHERE FOUNDATIONS MEETS THE FUTURE</p>
          <address>
            <span>{COMPANY.location}</span>
            <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
            <a href={COMPANY.whatsappUrl} target="_blank" rel="noopener noreferrer">{COMPANY.phoneDisplay}</a>
          </address>
        </div>

        <div className="footer__actions">
          <button className="btn btn--primary btn--sm" onClick={() => scrollToId('contact')}>GET A QUOTE</button>
          <a className="btn btn--ghost btn--sm" href={COMPANY.whatsappUrl} target="_blank" rel="noopener noreferrer">WHATSAPP US</a>
          <p className="footer__proud">PROUDLY SOUTH AFRICAN</p>
        </div>
      </div>
      <div className="container footer__legal">
        &copy; {COMPANY.founded} STT Legacy Carpentry and Construction (Pty) Ltd
        <span className="footer__credit">
          {' '}&middot; Website by <strong>PMP Solutions</strong>
        </span>
      </div>
    </footer>
  )
}