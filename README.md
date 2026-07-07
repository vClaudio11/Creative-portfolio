# Von Claudio — Creative Portfolio

A cinematic, editorial-style portfolio built to showcase brand collaborations, personal filmmaking and creative work. Built with Next.js 15, Framer Motion, and shadcn/ui.

**Live site:** [vonclaudio.vercel.app](https://vonclaudio.vercel.app)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion v12 (motion/react) |
| Components | shadcn/ui (base-nova style) |
| Font | Geist Sans |
| Deployment | Vercel |

---

## Features

### Hero — Coverflow Video Carousel
- Circular distance math for infinite looping (modulo wrapping)
- Per-card `translateX`, `scale`, and `opacity` driven by distance from active index
- Non-passive `wheel` event listener via `useRef` + `useEffect` to prevent page scroll
- 500ms throttle lock via `useRef` boolean to prevent scroll over-firing
- Autoplay with `muted`, `loop`, and `playsInline` on all visible cards
- Mobile: left/right button navigation replacing wheel scroll

### Work — Brand Collaboration Showcase
- Direction-aware slide transitions using Framer Motion `variants` and custom spring physics
- `useSpring` + `useScroll` parallax on section entry/exit
- `ResizeObserver` via `useRef` to dynamically match photo container height to card height
- Three brand cards: TELESIN (×2) and SANDMARC
- `whileInView` scroll-reveal with `brightness` + `scale` + `opacity` animation
- Responsive: stacked column on mobile, card + scrollable photo grid on desktop

### Gallery
- Full stills gallery with 3-column responsive grid
- Personal and brand stills from Malaysia and Philippines videos

### Contact
- Condensed photo mosaic alongside a contact card
- TikTok and Instagram icon links
- Direct email display

### Navigation
- Sticky navbar with smooth scroll anchor links to each section

---

## Project Structure

```
creative-portfolio/
├── app/
│   ├── globals.css          # Tailwind v4 theme, custom breakpoints, scrollbar hide
│   ├── layout.tsx           # Root layout, Geist font wiring
│   └── page.tsx             # Page composition
├── components/
│   ├── hero.tsx             # Coverflow carousel, wheel event, video play/pause
│   ├── work.tsx             # Brand card switcher, parallax, photo galleries
│   ├── gallery.tsx          # Shot gallery grid
│   ├── contact.tsx          # Contact section
│   ├── navbar.tsx           # Sticky navigation
│   └── ui/                  # shadcn-generated primitives
├── public/
│   ├── videos/hero/         # .mov files for carousel
│   └── photos/              # Thumbnails, work stills, gallery shots
└── next.config.ts
```

---

## Getting Started

```bash
# Clone the repo
git clone https://github.com/vClaudio11/creative-portfolio.git
cd creative-portfolio

# Install dependencies
npm install

# Run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Brand Collaborations Featured

- **TELESIN** - Master Grip (September 2025) · Fog Machine (March 2026)
- **SANDMARC** - Hybrid Mount + Creator Grip (October 2025)

---

## Author

**Von Claudio** - Independent cinematographer and social media creative  
Based in Auckland, New Zealand  
[vonclaudio.college@gmail.com](mailto:vonclaudio.college@gmail.com) · [Instagram](https://instagram.com) · [TikTok](https://tiktok.com)