import { SERVICES } from '../data/content.js'
import ServiceCard from './ServiceCard.jsx'

export default function Services() {
  return (
    <section id="services" className="section" aria-labelledby="services-title">
      <div className="container">
        <header className="section__head">
          <h2 id="services-title" className="h2">OUR SERVICES</h2>
          <p className="section__sub">QUALITY WORKMANSHIP. MODERN SOLUTIONS. BUILT TO LAST.</p>
        </header>
        <div className="cards">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.id} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
