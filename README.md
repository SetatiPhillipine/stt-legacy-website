# STT Legacy Carpentry and Construction: website

React + Vite + Framer Motion + Lucide.

## Run it
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in /dist
```

## Structure
```
index.html                 SEO title, description, fonts
public/images/             logo-mark.png, logo-full.png + your photos
src/main.jsx, App.jsx
src/styles.css             all styling and colour tokens
src/data/content.js        company details, services, photo paths, logo paths
src/utils/whatsapp.js      WhatsApp message + URL builder
src/utils/scroll.js        smooth scroll helper
src/components/            Navbar, Hero, TrustBar, Services, ServiceCard,
                           About, Contact, QuoteForm, Footer, WhatsAppButton,
                           Photo, Icon
```

## Replace the logo
Overwrite `public/images/logo-mark.png` (emblem, navbar + favicon) and
`public/images/logo-full.png` (full lockup, footer). Paths are set in `LOGO` in `src/data/content.js`.

## Add your photographs
Put files in `public/images/` with these names (or edit `PHOTOS` in `src/data/content.js`):

- hero-workers.jpg (wide, 1920px+)
- service-building.jpg, service-roofing.jpg, service-carpentry.jpg, service-renovations.jpg (about 1200x900)
- about-team.jpg (portrait or square)

Until a file exists, that slot shows a dark blueprint-grid placeholder.
Use real photos of your own work where possible. Licensed stock is fine as a temporary
stand-in but must not be presented as STT Legacy projects or staff.

## WhatsApp quoting
- Message text and URL encoding: `src/utils/whatsapp.js`
- Validation and opening WhatsApp on submit: `src/components/QuoteForm.jsx`
- Floating button: `src/components/WhatsAppButton.jsx`
- Number and email: `COMPANY` in `src/data/content.js`

There is no backend. The form opens WhatsApp with the message pre-filled, and email is a plain mailto link.

## Free hosting
Push to GitHub, then import the repo in Netlify, Cloudflare Pages or Vercel
(build command `npm run build`, output folder `dist`).
