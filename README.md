# 🚐 osekunde.pl

**Strona internetowa dla firmy transportowej osekunde** — komfortowy przewóz osób busem 8-osobowym we Włodawie i okolicach.

🌐 **Live:** [osekunde.pl](https://osekunde.pl)

---

## 📸 Podgląd

![Hero section z animowanym busem i CTA](public/busprzod.jpg)

## ⚡ Tech Stack

| Technologia | Wersja | Zastosowanie |
|-------------|--------|-------------|
| [Next.js](https://nextjs.org) | 16 | Framework React z SSR i App Router |
| [React](https://react.dev) | 19 | Biblioteka UI |
| [Tailwind CSS](https://tailwindcss.com) | 4 | Utility-first CSS |
| [Framer Motion](https://motion.dev) | 12 | Animacje i przejścia |
| [Lucide React](https://lucide.dev) | 1.14 | Ikony SVG |

## ✨ Funkcjonalności

- **Responsywny one-page design** — w pełni dostosowany do urządzeń mobilnych z hamburger menu
- **Animowany hero section** — parallax grid, speed lines, floating bus z cieniem
- **Efekt spotlight** — radialny gradient podążający za kursorem
- **Scrolling marquee** — pasek informacyjny z płynną animacją
- **Launch countdown banner** — modal z odliczaniem do daty startu, dismissable per sesję
- **Galeria floty** — bento grid z hover zoom na zdjęciach
- **Sekcja oferty** — karty usług z animacjami wejścia (viewport-triggered)
- **SEO** — Open Graph meta, robots.js, sitemap.js, semantyczny HTML, polskie keywords
- **Security headers** — HSTS, X-Frame-Options, CSP-ready konfiguracja w `next.config.mjs`
- **Optymalizacja obrazów** — WebP z PNG fallback, `<picture>` element, lazy/eager loading

## 🏗️ Architektura

```
app/
├── layout.js          # Root layout z fontami (Geist, Montserrat, Poppins) i metadanymi SEO
├── page.js            # Strona główna — navbar, spotlight overlay, kompozycja sekcji
├── globals.css        # Design tokens, animacje (speed-lines, marquee), launch banner styles
├── robots.js          # Konfiguracja robots.txt
└── sitemap.js         # Generowanie sitemap.xml

components/
├── Hero.jsx           # Sekcja hero — SVG grid, road lines, CTA, floating bus
├── Fleet.jsx          # O nas + galeria floty (bento layout)
├── Features.jsx       # Karty oferty + sekcja komfortu
├── Footer.jsx         # Kontakt, metody płatności, dane firmy
└── LaunchBanner.jsx   # Countdown modal z odliczaniem do startu

scripts/
└── compress-images.mjs  # Kompresja PNG → WebP + optymalizowany PNG (sharp)
```

## 🚀 Uruchomienie lokalne

```bash
# Instalacja zależności
npm install

# Serwer deweloperski
npm run dev
```

Strona będzie dostępna pod [http://localhost:3000](http://localhost:3000).

## 📦 Build produkcyjny

```bash
npm run build
npm start
```

## 🖼️ Optymalizacja obrazów

Skrypt do kompresji głównego mockupu busa (wymaga `sharp`):

```bash
node scripts/compress-images.mjs
```

## 📄 Licencja

Wszelkie prawa zastrzeżone © 2026 osekunde
