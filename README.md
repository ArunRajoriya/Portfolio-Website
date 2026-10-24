# Arun Rajoriya — Portfolio

A clean, modern portfolio website built with React, TypeScript, and Vite. Showcasing full-stack development projects and technical capabilities.

## 🚀 Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool
- **CSS3** - Custom styling with animations
- **No external UI libraries** - Clean, maintainable code

## 📦 Installation

```bash
npm install
```

## 🛠️ Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## 🏗️ Build

```bash
npm run build
```

Builds the app for production to the `dist` folder.

## 👀 Preview

```bash
npm run preview
```

Preview the production build locally.

## 🚢 Deployment

The built `dist` folder can be deployed to:

### Vercel
```bash
npm install -g vercel
vercel --prod
```

### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### Cloudflare Pages
```bash
npm run build
# Upload dist folder via Cloudflare Pages dashboard
```

### GitHub Pages
1. Build: `npm run build`
2. Push `dist` folder to `gh-pages` branch
3. Enable GitHub Pages in repository settings

## 📁 Project Structure

```
Portfolio-Website/
├── public/              # Static assets
│   ├── arun-rajoriya-portrait.png
│   ├── Arun_Rajoriya_Resume.pdf
│   └── favicon files
├── src/
│   ├── components/      # React components
│   │   ├── Header.tsx/css
│   │   ├── Hero.tsx/css
│   │   ├── TechStack.tsx/css
│   │   ├── Projects.tsx/css
│   │   ├── Capabilities.tsx/css
│   │   ├── Experience.tsx/css
│   │   ├── Contact.tsx/css
│   │   └── Footer.tsx/css
│   ├── App.tsx          # Main app component
│   ├── App.css          # App styles
│   ├── main.tsx         # Entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
├── vite.config.ts       # Vite configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Dependencies

```

## 🎨 Features

- ✅ Fully responsive design
- ✅ Smooth scroll navigation
- ✅ Pure CSS animations (no libraries)
- ✅ Dark theme optimized
- ✅ Performance optimized
- ✅ SEO friendly
- ✅ Type-safe with TypeScript
- ✅ Fast builds with Vite

## 📊 Build Size

```
dist/index.html                    0.93 kB
dist/assets/index.css             13.94 kB │ gzip:  2.93 kB
dist/assets/index.js             157.19 kB │ gzip: 50.01 kB
```

## 📝 License

MIT License - see [LICENSE](LICENSE) file for details

## 👤 Author

**Arun Rajoriya**

- Portfolio: [Your deployed URL]
- LinkedIn: [linkedin.com/in/arun-rajoriya](https://www.linkedin.com/in/arun-rajoriya/)
- GitHub: [github.com/Arunraj-Logarajah](https://github.com/Arunraj-Logarajah)
- Email: arunrajoriya7024@gmail.com

---

Built with ❤️ using React + TypeScript + Vite
