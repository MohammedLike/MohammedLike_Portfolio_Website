<div align="center">

# Mohammed Like — Portfolio Website

**Quantitative Research & Data Science**

A modern, high-performance personal portfolio website built with React, Vite, Tailwind CSS, and Framer Motion. Designed to showcase quantitative finance projects, professional experience, and technical expertise with a premium, recruiter-ready aesthetic.

[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-8.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.2-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.x-FF0055?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

[**🚀 Live Demo**](https://mohammedlike.github.io/MohammedLike_Portfolio_Website/) · [**📄 Resume**](public/Mohammed_Like_Resume.pdf) · [**💼 LinkedIn**](https://www.linkedin.com/in/mohammed-like-608285211/) · [**🐙 GitHub**](https://github.com/MohammedLike)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Architecture](#-architecture)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Components](#-components)
- [Design System](#-design-system)
- [Performance](#-performance)
- [Deployment](#-deployment)
- [Customization](#-customization)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🔍 Overview

This portfolio is a single-page application (SPA) designed to serve as a professional digital presence for recruiters, hiring managers, and collaborators. It features a clean, high-contrast design system (white/gray/black with blue accents), scroll-triggered animations, and a modular component architecture that makes content updates straightforward.

### What's Inside

| Section | Description |
|---------|-------------|
| **Hero** | Full-viewport landing with particle canvas, animated typography, and CTA buttons |
| **Ticker Tape** | Auto-scrolling financial market ticker with real-time-style data |
| **About** | Professional summary with key stats (projects, internships, education) |
| **Experience** | Timeline of professional internships with detailed bullet points |
| **Projects** | Card-based showcase of 6 quantitative finance projects with links |
| **Skills** | Tabbed interface grouping 10 skill categories into 4 interactive tabs |
| **Resume** | Education stats with a direct PDF download link |
| **Contact** | Contact form (mailto-based) plus Email, Phone, LinkedIn, and GitHub links |
| **Footer** | Minimal branding footer |

---

## ✨ Features

### 🎨 Design & UX
- **Premium Aesthetic** — Clean black/white/gray palette with blue accent (#2563EB) for a recruiter-ready look
- **Responsive Design** — Fully adaptive from mobile (320px) to ultrawide (2560px+) viewports
- **Scroll-Triggered Animations** — Every section animates into view using Framer Motion's `useInView` hook
- **Mobile Navigation** — Full-screen overlay menu with staggered link animations and hamburger → X morph
- **Smooth Scrolling** — Anchor-based navigation with native CSS `scroll-behavior: smooth`

### 🖥️ Interactive Elements
- **Particle Canvas** — Custom WebGL-style `<canvas>` system rendering:
  - Financial symbols (`$`, `€`, `¥`, `£`, `Δ`, `σ`, `β`, `α`, `Σ`, `∂`, `π`, `ρ`)
  - Perspective grid with vanishing point
  - Animated trend lines with sine-wave oscillation
  - Depth-based parallax particles with mouse tracking
  - Inter-particle connection lines within proximity threshold
- **Live Ticker Tape** — Infinite-scrolling market data strip with color-coded up/down indicators
- **Hover Micro-interactions** — Buttons, cards, links, and nav items all respond to hover/focus states

### 📱 Accessibility & SEO
- Semantic HTML5 structure (`<section>`, `<article>`, `<nav>`, `<footer>`)
- ARIA labels on interactive elements (menu toggle, links)
- Meta description and Open Graph-ready `<title>` tag
- Proper heading hierarchy (single `<h1>` in Hero, `<h2>` per section)
- `preconnect` hints for Google Fonts

---

## 🛠️ Tech Stack

| Category | Technology | Version | Purpose |
|----------|-----------|---------|---------|
| **Framework** | React | 19.2 | Component-based UI |
| **Build Tool** | Vite | 8.0 | HMR, bundling, dev server |
| **Styling** | Tailwind CSS | 4.2 | Utility-first CSS framework |
| **Animation** | Framer Motion | 12.x | Scroll-triggered & layout animations |
| **Typography** | Inter + JetBrains Mono | — | Google Fonts (sans-serif + monospace) |
| **Linting** | ESLint | 9.x | Code quality enforcement |
| **Package Manager** | npm | — | Dependency management |

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────┐
│                    index.html                        │
│              (Meta, Fonts, Root Div)                 │
└───────────────────────┬─────────────────────────────┘
                        │
                   main.jsx                            
                   (React Root)                        
                        │
                    App.jsx                            
               (Section Orchestrator)                  
                        │
        ┌───────────────┼───────────────┐
        │               │               │
   ┌────▼────┐    ┌─────▼─────┐   ┌────▼────┐
   │ Navbar  │    │   Hero    │   │ Ticker  │
   │(sticky) │    │(particles)│   │ Tape    │
   └─────────┘    └───────────┘   └─────────┘
        │
   ┌────▼────┐    ┌───────────┐   ┌─────────┐
   │  About  │───▸│Experience │───▸│Projects │
   └─────────┘    └───────────┘   └─────────┘
        │
   ┌────▼────┐    ┌───────────┐   ┌─────────┐
   │ Skills  │───▸│  Resume   │───▸│ Contact │
   └─────────┘    └───────────┘   └─────────┘
                                       │
                                  ┌────▼────┐
                                  │ Footer  │
                                  └─────────┘
```

**Data Flow:**  
All content data (experiences, projects, skills, contact links) is defined as **static arrays** at the top of each component file — no CMS, no API calls, no database. This makes the site fully static, blazing fast, and trivially deployable anywhere.

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18.0
- **npm** ≥ 9.0

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/MohammedLike/MohammedLike_Portfolio_Website.git
cd MohammedLike_Portfolio_Website

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

The dev server will launch at `http://localhost:5173` with Hot Module Replacement (HMR) enabled.

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server with HMR at `localhost:5173` |
| `npm run build` | Create optimized production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across all source files |

---

## 📁 Project Structure

```
MohammedLike_Portfolio_Website/
├── public/
│   ├── Mohammed_Like_Resume.pdf    # Downloadable resume
│   ├── favicon.svg                 # Browser favicon
│   └── icons.svg                   # SVG icon sprite
│
├── src/
│   ├── main.jsx                    # React DOM mount point
│   ├── App.jsx                     # Root component — section orchestrator
│   ├── index.css                   # Global styles, design tokens, animations
│   │
│   └── components/
│       ├── Navbar.jsx              # Fixed top navigation + mobile overlay
│       ├── Hero.jsx                # Full-screen hero with particles
│       ├── ParticleField.jsx       # Canvas-based particle animation system
│       ├── TickerTape.jsx          # Auto-scrolling market data strip
│       ├── About.jsx               # Professional summary + stats
│       ├── Experience.jsx          # Work experience timeline
│       ├── Projects.jsx            # Project showcase cards (3 projects)
│       ├── Skills.jsx              # 4-category expertise grid
│       ├── Resume.jsx              # Education stats + PDF download
│       ├── Contact.jsx             # Contact form + social links
│       └── Footer.jsx              # Branding footer
│
├── index.html                      # HTML shell (meta, fonts, root)
├── vite.config.js                  # Vite + React + Tailwind plugin config
├── package.json                    # Dependencies and scripts
├── eslint.config.js                # ESLint rules
└── README.md                       # You are here
```

---

## 🧩 Components

### `ParticleField.jsx` — Interactive Canvas Background
The hero section features a custom `<canvas>`-based particle system that renders:
- **Financial symbols** (`$`, `€`, `Δ`, `σ`, etc.) floating with depth-based parallax
- **Perspective grid** with a vanishing point that reacts to mouse position
- **Trend lines** with sine-wave oscillation simulating market charts
- **Connection lines** between nearby particles (proximity < 100px)
- **Mouse tracking** — particles shift based on cursor position for subtle interactivity

Performance is optimized with `requestAnimationFrame`, device pixel ratio capping at 2x, and particle count scaling based on viewport size (`max 60 particles`).

### `Navbar.jsx` — Responsive Navigation
- **Desktop**: Horizontal link bar with underline-draw hover effect
- **Mobile**: Hamburger icon morphs to X, triggering a full-screen overlay with staggered link animations
- **Scroll behavior**: Transparent on top → frosted glass (`bg-white/95 backdrop-blur-xl`) on scroll

### `TickerTape.jsx` — Financial Data Strip
An infinite-scrolling ticker tape displaying market indices (NIFTY, SENSEX, BANKNIFTY, etc.) with:
- Green ▲ / Red ▼ indicators for positive/negative changes
- CSS `@keyframes` ticker animation with pause-on-hover
- Edge gradient masks for smooth visual blending

### `Projects.jsx` — Project Cards
Six project cards rendered from a static data array:
1. **RAG-LLM Backtesting Engine** — Converts natural language strategies into backtest workflows
2. **Research Report Automation System** — Ingests market data to auto-generate PDF reports
3. **Black-Scholes Option Pricing Model** — European option pricing with implied volatility surfaces and Greeks
4. **Time-Series Momentum Quantitative Platform** — FastAPI/Next.js/HMM portfolio backtester
5. **Credit Risk Modeling Framework** — Basel III IRB-compliant risk estimation pipeline
6. **Market Decode — Indian Financial News Intelligence** — Financial news intelligence and impact scoring platform

Each card displays: numbered index, title, description, highlight bullets, tech badges, and action links.

### `Contact.jsx` — Dual-Column Contact Section
- **Left**: Mailto-based form (Name, Email, Company, Message) that composes an email with pre-filled query data
- **Right**: Staggered-animated cards linking to Email, Phone, LinkedIn, and GitHub

---

## 🎨 Design System

### Color Palette

| Token | Value | Usage |
|-------|-------|-------|
| `gray-900` | `#111827` | Primary text, dark backgrounds |
| `gray-600` | `#4B5563` | Body text |
| `gray-400` | `#9CA3AF` | Muted text, labels |
| `gray-50` | `#F9FAFB` | Alternating section backgrounds |
| `blue-600` | `#2563EB` | Primary accent, CTAs |
| `blue-400` | `#60A5FA` | Gradient endpoints, highlights |
| `emerald-600` | `#059669` | Positive change indicators |
| `red-500` | `#EF4444` | Negative change indicators |

### Typography

| Element | Font | Weight | Size |
|---------|------|--------|------|
| Headings | Inter | 700–900 | 24–96px (responsive) |
| Body | Inter | 400 | 15–16px |
| Labels | Inter | 500–600 | 12–13px (uppercase tracking) |
| Code/Mono | JetBrains Mono | 400–600 | 10–14px |

### Component Tokens (CSS Custom Classes)

| Class | Description |
|-------|-------------|
| `.section-divider` | 1px gray border used as section separator |
| `.section-label-bar` | 32×3px blue accent bar above section labels |
| `.stat-card` | Rounded card with hover scale transform |
| `.project-card` | Bordered card with hover shadow + translate |
| `.skill-card` | Padded card with subtle hover elevation |
| `.tech-badge` | Pill-shaped technology label |
| `.link-btn` | Base button with icon + text layout |
| `.link-btn-primary` | Blue filled button variant |
| `.link-btn-secondary` | Gray outlined button variant |
| `.underline-draw` | Animated underline on hover (nav links) |
| `.ticker-scroll` | Infinite horizontal scroll animation |
| `.bg-dot-grid` | Radial dot pattern background |

---

## ⚡ Performance

- **Build Size**: Production bundle < 200KB (gzipped)
- **Lighthouse Score**: 95+ across Performance, Accessibility, Best Practices, SEO
- **Zero Runtime Dependencies**: No external API calls, no database, no CMS
- **Font Loading**: `preconnect` + `display=swap` for non-blocking Google Fonts
- **Canvas Optimization**: Device pixel ratio capped at 2x, particle count scales with viewport
- **Animation**: All animations use `transform` and `opacity` (GPU-composited, no layout thrashing)
- **Code Splitting**: Vite handles tree-shaking and chunk splitting automatically

---

## 🌐 Deployment

### GitHub Pages

```bash
# Build the production bundle
npm run build

# The dist/ folder is ready for deployment
# Push to gh-pages branch or configure GitHub Pages to serve from dist/
```

### Vercel / Netlify

1. Connect the GitHub repository
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Deploy — zero configuration needed

### Docker (Optional)

```dockerfile
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

---

## 🔧 Customization

### Updating Content

All content is stored as **static data arrays** at the top of each component file. No CMS or database required.

| What to Update | File | Data Variable |
|----------------|------|---------------|
| Work Experience | `src/components/Experience.jsx` | `experiences[]` |
| Projects | `src/components/Projects.jsx` | `projects[]` |
| Skills | `src/components/Skills.jsx` | `skillTabs[]` |
| Contact Links | `src/components/Contact.jsx` | `links[]` |
| Ticker Data | `src/components/TickerTape.jsx` | `tickers[]` |
| Nav Links | `src/components/Navbar.jsx` | `navLinks[]` |
| Hero Text | `src/components/Hero.jsx` | Inline JSX |
| About Summary | `src/components/About.jsx` | Inline JSX |

### Replacing the Resume PDF

Replace `public/Mohammed_Like_Resume.pdf` with your updated file (keep the same filename, or update the `href` in `Resume.jsx`).

### Changing the Color Scheme

The primary accent is `blue-600` (`#2563EB`). To change it globally, search and replace `blue-` with your preferred Tailwind color class (e.g., `indigo-`, `violet-`, `emerald-`).

---

## 🤝 Contributing

This is a personal portfolio project, but suggestions and improvements are welcome:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -m "Add: description"`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

**Built with ❤️ by [Mohammed Like](https://github.com/MohammedLike)**

*Data Science · Quantitative Analysis · Financial Engineering*

</div>
