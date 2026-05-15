# JG University — Redesigned Landing Page

A modern, visually engaging university landing page built with **Next.js 14** and **Tailwind CSS**, inspired by [jguni.in](https://jguni.in/).

## Tech Stack

- **Next.js 14** (App Router)
- **Tailwind CSS** (with custom config)
- **TypeScript**
- Google Fonts: Playfair Display, DM Sans, JetBrains Mono

## Features

- **Responsive Design** — mobile-first, looks great on all screens
- **Smooth Scroll Animations** — IntersectionObserver-based reveal animations
- **Interactive Programs Tab** — filterable programme categories
- **Animated Hero** — parallax blob effect on mouse move
- **Auto-advancing Testimonials Carousel** — 5-second interval with manual override
- **Partners Marquee** — infinite scroll of industry partners
- **Glassmorphism & Modern UI** — gradient mesh, noise textures, floating cards
- **Custom scrollbar**, animated gradient text, blob morphing

## Sections

1. **Navbar** — sticky with scroll blur, mobile hamburger menu
2. **Hero** — animated, statistics, floating cards, CTA buttons
3. **About** — university story, feature grid, leader quote
4. **Programs** — 50+ programmes in tabbed categories (UG / PG / Doctoral / Certificate)
5. **Strengths** — 6 strength cards + salient features checklist
6. **Partners** — infinite marquee of industry partners & recruiters
7. **Campus** — facilities, stats, visual collage
8. **Testimonials** — auto-advancing slider with alumni quotes
9. **CTA** — admissions call-to-action with contact info
10. **Footer** — full links, contact details, social icons

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Build for Production

```bash
npm run build
npm start
```

## Deployment

Deploy instantly to **Vercel**:

1. Push to GitHub
2. Import project at [vercel.com/new](https://vercel.com/new)
3. Click Deploy — no configuration needed

Or **Netlify**:
1. `npm run build`
2. Deploy the `.next` folder

## Design Philosophy

- **Color Palette**: Deep navy (#161752) as primary, gold (#E8B020) as accent
- **Typography**: Playfair Display for headings (authority + elegance), DM Sans for body (modern readability)
- **Aesthetic**: Luxury-academic — refined, premium, trustworthy
- **Animations**: CSS + IntersectionObserver (no heavy JS libraries)

## Submission Info

- **Assignment by**: Vikas — codingjr.online
- **Submission email**: vikas@codingjr.online
