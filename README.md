# Hanssen Portfolio - Next.js with Tailwind CSS & SSR

A modern, performant portfolio website built with **Next.js 16** featuring:

- ✅ **Server-Side Rendering (SSR)** for better SEO and performance
- ✅ **App Router** with file-based routing
- ✅ **Tailwind CSS 4** with dark mode support using CSS variables
- ✅ **TypeScript** for type safety
- ✅ **React 19** for the latest React features
- ✅ **Theme Context** for elegant dark/light mode switching
- ✅ **Responsive Design** with mobile-first approach

## Project Structure

```
app/
├── page.tsx              # Home page
├── work/
│   └── page.tsx         # Work/Portfolio page
├── about/
│   └── page.tsx         # About page
├── contact/
│   └── page.tsx         # Contact page
├── blog/
│   ├── page.tsx         # Blog listing
│   └── [slug]/
│       └── page.tsx     # Blog detail page
├── not-found.tsx        # 404 page
├── layout.tsx           # Root layout
├── providers.tsx        # Theme provider
└── globals.css          # Global styles

components/
├── Icons.tsx            # SVG icon components
```

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

## Features

### 🎨 Dark Mode
- Built with CSS variables for seamless theme switching
- Stored in localStorage for persistence
- Respects user's system preference on first visit

### 🚀 Performance
- SSR with automatic static optimization
- Code splitting and lazy loading
- Image optimization ready
- Minimal bundle size

### 🎯 Routing
- File-based routing with Next.js App Router
- Dynamic routes for blog posts
- Built-in 404 handling

### 💎 Styling
- Tailwind CSS with custom color variables
- Dark mode support via `dark` class
- Smooth transitions and animations
- Mobile-responsive design

## Color Scheme

The theme uses CSS variables for maximum flexibility:

```css
--bg-default       /* Background */
--bg-muted         /* Secondary background */
--bg-muted-2       /* Tertiary background */
--bg-primary       /* Primary/accent color */
--text-default     /* Primary text */
--text-muted       /* Secondary text */
--text-inverse     /* Text on primary background */
--text-inverse-muted /* Secondary text on primary bg */
```

## Deployment

This project can be deployed to:
- Vercel (recommended)
- Netlify
- AWS
- Any Node.js hosting

### Vercel Deployment

```bash
npm install -g vercel
vercel
```

## Technologies Used

- **Next.js 16** - React framework with SSR
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Utility-first CSS
- **PostCSS** - CSS processing

## License

MIT

---

Built with ❤️ for modern web performance and user experience
