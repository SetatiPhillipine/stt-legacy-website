// ─────────────────────────────────────────────────────────────
// STT LEGACY CARPENTRY AND CONSTRUCTION
// All editable business content lives here.
// ─────────────────────────────────────────────────────────────


// ── COMPANY ──────────────────────────────────────────────────

export const COMPANY = {
  name: 'STT LEGACY CARPENTRY AND CONSTRUCTION (PTY) LTD',
  shortName: 'STT Legacy',
  slogan: 'Where Foundations Meets the Future',
  location: 'Johannesburg, Gauteng',
  email: 'info@sttlegacy.co.za',
  phoneDisplay: '+27 67 047 8198',
  whatsappNumber: '27670478198',
  whatsappUrl: 'https://wa.me/27670478198',
  founded: 2026,

  socials: {
    instagram: {
      url: 'https://www.instagram.com/sttlegacycarpentry/',
      handle: '@sttlegacycarpentry',
    },
    facebook: {
      url: 'https://www.facebook.com/people/STT-Legacy-Carpentry-Construction-Pty-Ltd-/61593112455391/',
      handle: 'STT Legacy Carpentry & Construction',
    },
    tiktok: {
      url: 'https://www.tiktok.com/@sttlegacy1',
      handle: '@sttlegacy1',
    },
  },
}


// ── LOGO ─────────────────────────────────────────────────────
// Place these files inside /public/images.

export const LOGO = {
  mark: 'images/logo-mark.png',
  full: 'images/logo-full.png',
}


// ── PHOTOGRAPHS ──────────────────────────────────────────────
// Place all photographs inside /public/images.
//
// IMPORTANT:
// - hero-background.jpg is your main Home/Hero background.
// - Service images can be replaced with your own photographs.
// - Do not present stock photographs as completed STT Legacy projects.


export const PHOTOS = {

  // Main Home page background
  hero: {
    src: 'images/hero-background.jpg',
    alt: 'Construction workers wearing safety equipment working on a building site',
  },

  // Building service
  building: {
    src: 'images/building.jpg',
    alt: 'Construction workers building a residential brick structure',
  },

  // Roofing service
  roofing: {
    src: 'images/roofing.jpg',
    alt: 'Roofing workers installing and working on a residential roof',
  },

  // Carpentry service
  carpentry: {
    src: 'images/carpentry.jpg',
    alt: 'Carpenter measuring and working with timber on a construction project',
  },

  // Renovations service
  renovations: {
    src: 'images/renovations.jpg',
    alt: 'Workers carrying out renovation work inside a residential property',
  },

  // About section
  about: {
    src: 'images/about-team.jpg',
    alt: 'Construction workers reviewing building plans on site',
  },

}




// ── SERVICES ─────────────────────────────────────────────────

export const SERVICES = [
  {
    id: 'building',
    title: 'BUILDING',
    icon: 'Building2',
    text: 'New residential builds, walling, foundations and extensions.',
    photo: PHOTOS.building,
  },

  {
    id: 'roofing',
    title: 'ROOFING',
    icon: 'Home',
    text: 'Roof installation, repairs, re-roofing and waterproofing using quality materials.',
    photo: PHOTOS.roofing,
  },

  {
    id: 'carpentry',
    title: 'CARPENTRY',
    icon: 'Hammer',
    text: 'Custom carpentry, framing, decking, built-ins and timber work.',
    photo: PHOTOS.carpentry,
  },

  {
    id: 'renovations',
    title: 'RENOVATIONS',
    icon: 'PaintRoller',
    text: 'Kitchens, bathrooms and full home renovations with modern finishes.',
    photo: PHOTOS.renovations,
  },
]


// ── SERVICE DROPDOWN OPTIONS ─────────────────────────────────

export const SERVICE_OPTIONS = [
  'Building',
  'Roofing',
  'Carpentry',
  'Renovations',
  'Other',
]


// ── ABOUT HIGHLIGHTS ─────────────────────────────────────────

export const HIGHLIGHTS = [
  {
    icon: 'BadgeCheck',
    label: 'QUALITY WORKMANSHIP',
  },

  {
    icon: 'Handshake',
    label: 'HONEST PRICING',
  },

  {
    icon: 'Ruler',
    label: 'MODERN TECHNIQUES',
  },

  {
    icon: 'MapPin',
    label: 'SERVING GAUTENG',
  },
]


// ── TRUST BAR ────────────────────────────────────────────────
// Keep CIPC REGISTERED and QUALITY GUARANTEED only if these
// claims are confirmed for the business.

export const TRUST = [
  {
    icon: 'Flag',
    label: 'PROUDLY SOUTH AFRICAN',
  },

  {
    icon: 'MapPin',
    label: 'SERVING GAUTENG',
  },

  {
    icon: 'BadgeCheck',
    label: 'QUALITY FOCUSED',
  },

  {
    icon: 'Ruler',
    label: 'MODERN APPROACH',
  },
]


// ── NAVIGATION ───────────────────────────────────────────────

export const NAV_LINKS = [
  {
    id: 'home',
    label: 'Home',
  },

  {
    id: 'services',
    label: 'Services',
  },

  {
    id: 'about',
    label: 'About',
  },

  {
    id: 'contact',
    label: 'Contact',
  },
]