import {
  Building2, Home, Hammer, PaintRoller, BadgeCheck, Handshake, Ruler,
  MapPin, FileCheck2, ShieldCheck, Flag,
} from 'lucide-react'

const MAP = { Building2, Home, Hammer, PaintRoller, BadgeCheck, Handshake, Ruler, MapPin, FileCheck2, ShieldCheck, Flag }

export default function Icon({ name, ...props }) {
  const Cmp = MAP[name] || BadgeCheck
  return <Cmp aria-hidden="true" {...props} />
}
