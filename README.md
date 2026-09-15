# Arun Rajoriya — Portfolio Website

> A modern, performance-optimized portfolio showcasing full-stack development expertise, AI/ML systems, and production-ready projects.

[![Live Demo](https://img.shields.io/badge/demo-live-success)](https://arunrajoriya.com)
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)]()
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

## 🚀 Overview

Personal portfolio website built with cutting-edge web technologies, featuring a clean, professional design with smooth animations and optimal performance. The site showcases real-world projects including client work, AI systems, and backend platforms with measurable impact.

**Live Site:** [arunrajoriya.com](https://portfolio-website-mocha-seven-41.vercel.app/) *(Update with your actual domain)*

## ✨ Key Features

- **Modern Stack:** Built with TanStack Start, React 19, and Tailwind CSS v4
- **Type-Safe:** Full TypeScript implementation for reliability and maintainability
- **Performance-First:** Optimized bundle sizes, lazy loading, and efficient rendering
- **Responsive Design:** Mobile-first approach with fluid layouts across all devices
- **Dark Theme:** Professional dark color scheme with teal/cyan accents
- **SEO Optimized:** Meta tags, semantic HTML, and social media previews
- **Smooth Animations:** Subtle reveal animations and transitions for enhanced UX
- **Dynamic Content:** Live GitHub repository integration via Supabase

## 🏗️ Architecture

### Tech Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| **Framework** | TanStack Start | Modern React meta-framework with SSR support |
| **Language** | TypeScript | Type safety and enhanced developer experience |
| **UI Library** | React 19 | Component-based architecture with latest features |
| **Styling** | Tailwind CSS v4 | Utility-first CSS with custom design system |
| **UI Components** | Radix UI | Accessible, unstyled component primitives |
| **Icons** | Lucide React | Beautiful, consistent icon system |
| **Backend** | Supabase | Real-time data and authentication (optional) |
| **Build Tool** | Vite | Fast bundling and hot module replacement |
| **Deployment** | Cloudflare Pages/Vercel | Edge-optimized static hosting |

### Project Structure

```
portfolio-website/
├── public/                      # Static assets
│   ├── arun-rajoriya-portrait.png
│   ├── linkedin-banner.png
│   ├── Arun_Rajoriya_Resume.pdf
│   └── favicon.ico
├── src/
│   ├── components/              # Reusable React components
│   │   ├── ui/                  # UI primitives (buttons, cards, etc.)
│   │   └── RepoGrid.tsx         # GitHub repository showcase
│   ├── routes/                  # File-based routing
│   │   ├── __root.tsx           # Root layout
│   │   └── index.tsx            # Homepage
│   ├── integrations/
│   │   └── supabase/            # Supabase client and utilities
│   ├── lib/                     # Utility functions and helpers
│   │   └── portfolio.functions.ts
│   ├── styles.css               # Global styles and Tailwind config
│   └── router.tsx               # Router configuration
├── .output/                     # Build output (generated)
├── node_modules/                # Dependencies (generated)
├── package.json                 # Project dependencies and scripts
├── tsconfig.json               # TypeScript configuration
├── eslint.config.js            # Linting rules
└── README.md                   # Project documentation
```

## 🎨 Design System

### Color Palette

- **Primary:** `oklch(0.82 0.18 158)` — Teal/cyan accent
- **Background:** `oklch(13.211% 0.01799 225.355 / 0.655)` — Deep dark blue
- **Foreground:** `oklch(0.95 0.015 165)` — Off-white text
- **Card:** `oklch(0.17 0.025 220)` — Elevated surfaces
- **Muted:** `oklch(0.67 0.025 205)` — Secondary text

### Typography

- **Sans-serif:** Work Sans — Clean, modern, professional
- **Monospace:** JetBrains Mono — Code snippets and technical details

### Key Components

- **Hero Section:** Full-viewport with portrait background and gradient overlay
- **Project Cards:** Grid layout with hover effects and color-coded categories
- **Metrics Display:** Three-column stats showcasing key achievements
- **Experience Timeline:** Chronological layout with visual markers
- **Repository Grid:** Live GitHub integration with language indicators

## 📦 Installation & Setup

### Prerequisites

- **Node.js:** v18.x or higher
- **npm:** v9.x or higher (or use pnpm/yarn)

### Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ArunRajoriya/Portfolio-Website.git
   cd Portfolio-Website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   
   Create a `.env` file in the root directory:
   ```env
   # Supabase (optional - for dynamic features)
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Start development server:**
   ```bash
   npm run dev
   ```
   
   The site will be available at `http://localhost:8080`

5. **Build for production:**
   ```bash
   npm run build
   ```
   
   Preview production build:
   ```bash
   npm run preview
   ```

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Production build with optimizations |
| `npm run build:dev` | Development build for debugging |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint for code quality checks |
| `npm run format` | Format code with Prettier |

## 🚢 Deployment

### Cloudflare Pages (Recommended)

1. Connect your GitHub repository to Cloudflare Pages
2. Set build command: `npm run build`
3. Set output directory: `.output/public`
4. Deploy!

### Vercel

1. Import project from GitHub
2. Framework preset: TanStack Start
3. Build command: `npm run build`
4. Output directory: `.output/public`
5. Deploy!

### Manual Deployment

```bash
npm run build
npx nitro deploy --prebuilt
```

## 📊 Performance Metrics

- **Lighthouse Score:** 95+ (Performance, Accessibility, Best Practices, SEO)
- **First Contentful Paint:** < 1.5s
- **Time to Interactive:** < 3s
- **Bundle Size:** ~630KB (gzipped: ~183KB)

## 🎯 Featured Projects

The portfolio showcases four key projects:

1. **Bandhan Elevators** — Production website for a client company
2. **Meeting Intelligence Platform** — AI-powered audio transcription and analysis
3. **PhishGuard AI** — Real-time phishing detection with 99.82% accuracy
4. **Crime Analytics Dashboard** — Government data transformation and RAG system

## 🔐 Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `VITE_SUPABASE_URL` | No | Supabase project URL for dynamic features |
| `VITE_SUPABASE_ANON_KEY` | No | Supabase anonymous key for client access |

## 🛠️ Customization Guide

### Update Personal Information

Edit `src/routes/index.tsx`:

```typescript
const GITHUB = "https://github.com/YourUsername";
const LINKEDIN = "https://linkedin.com/in/your-profile";
const EMAIL = "your.email@example.com";
const PHONE = "+1234567890";
```

### Modify Projects

Update the `projects` array in `src/routes/index.tsx`:

```typescript
const projects = [
  {
    index: "01",
    type: "PROJECT TYPE",
    title: "Project Name",
    summary: "Project description...",
    metric: "Key metric",
    stack: ["Tech", "Stack"],
    tone: "project-mint", // or project-cyan, project-lime
    link: "https://project-url.com",
  },
  // Add more projects...
];
```

### Change Color Scheme

Update CSS variables in `src/styles.css`:

```css
:root {
  --primary: oklch(0.82 0.18 158); /* Change primary color */
  --background: oklch(13.211% 0.01799 225.355 / 0.655);
  /* Modify other colors as needed */
}
```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/ArunRajoriya/Portfolio-Website/issues).

### Development Workflow

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add some amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request



## 👤 Author

**Arun Rajoriya**

- Website: [arunrajoriya.com](https://arunrajoriya.com)
- GitHub: [@ArunRajoriya](https://github.com/ArunRajoriya)
- LinkedIn: [Arun Rajoriya](https://linkedin.com/in/arun-rajoriya-587a6a252)
- Email: arunrajoriya2004@gmail.com

## 🙏 Acknowledgments

- Design inspiration from modern portfolio trends
- UI components powered by [Radix UI](https://www.radix-ui.com/)
- Icons by [Lucide](https://lucide.dev/)
- Fonts: [Work Sans](https://fonts.google.com/specimen/Work+Sans) and [JetBrains Mono](https://www.jetbrains.com/lp/mono/)

---

<div align="center">
  <sub>Built by Developer Arun Rajoriya</sub>
</div>
