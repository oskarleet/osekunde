# osekunde.pl

[![Next.js 16](https://img.shields.io/badge/Next.js-16-black?style=flat&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React 19](https://img.shields.io/badge/React-19-61DAFB?style=flat&logo=react&logoColor=black)](https://react.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES2022-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Tailwind CSS 4](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: Proprietary](https://img.shields.io/badge/License-Proprietary-red?style=flat)](LICENSE)

Source code for the professional landing page of **osekunde** — a passenger transport company offering comfortable 8-seat minibus rides in Włodawa and the surrounding area.

Live version: [osekunde.pl](https://osekunde.pl)

## Key features

- **Responsive one-page design:** Fully mobile-friendly layout with a hamburger navigation menu.
- **Animated hero section:** Parallax grid, speed lines, and a floating bus with dynamic shadow.
- **Spotlight effect:** Radial gradient that follows the cursor across the page.
- **Scrolling marquee:** Information bar with smooth, continuous animation.
- **Launch countdown banner:** Dismissable modal with a countdown to the go-live date, stored per session.
- **Fleet gallery:** Bento-grid layout with hover zoom on vehicle photos.
- **Services section:** Service cards with viewport-triggered entrance animations.
- **Production-ready SEO:** Open Graph metadata, dynamic sitemap generation, custom robots rules, and semantic HTML with Polish keywords.
- **Enhanced security:** Custom headers in Next.js config including HSTS, X-Frame-Options, and security headers.
- **Image optimization:** WebP with PNG fallback via `<picture>` elements, plus lazy and eager loading strategies.

## Tech stack

- **Framework:** Next.js 16 (App Router)
- **UI Library:** React 19 & JavaScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React

## Project structure

```
app/
├── layout.js          # Root layout with fonts (Geist, Montserrat, Poppins) and SEO metadata
├── page.js            # Main page — navbar, spotlight overlay, section composition
├── globals.css        # Design tokens, animations (speed-lines, marquee), launch banner styles
├── robots.js          # robots.txt configuration
└── sitemap.js         # sitemap.xml generation

components/
├── Hero.jsx           # Hero section — SVG grid, road lines, CTA, floating bus
├── Fleet.jsx          # About us + fleet gallery (bento layout)
├── Features.jsx       # Service cards + comfort section
├── Footer.jsx         # Contact, payment methods, company details
└── LaunchBanner.jsx   # Countdown modal for launch date

scripts/
└── compress-images.mjs  # PNG → WebP compression + optimized PNG (sharp)
```

## Local development

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

The site will be available at [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm start
```

## Image optimization

Script for compressing the main bus mockup (requires `sharp`):

```bash
node scripts/compress-images.mjs
```

## License

All rights reserved © 2026 Oskar Stenborowski
