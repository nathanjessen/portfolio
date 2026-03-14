# Nathan Jessen's Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-16-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-38B2AC)](https://tailwindcss.com)
[![Storybook](https://img.shields.io/badge/Storybook-10-FF4785)](https://storybook.js.org/)

My professional portfolio website showcasing my work, experience, and skills. Built with modern web technologies and best practices.

🔗 [View Live Site](https://www.nathanjessen.com/)

## ✨ Features

- 🎨 Modern, responsive design using TailwindCSS
- 📱 Mobile-first approach with a clean, minimalist UI
- ⚡ Fast page loads with Next.js 16 App Router
- 🧩 Component-driven development with Storybook
- 🔍 SEO optimized
- 📊 TypeScript for type safety
- 🚀 Deployed on Vercel with automatic CI/CD

## 🛠️ Tech Stack

### Core

- [Next.js](https://nextjs.org) ^16 - React framework for production
- [React](https://reactjs.org) ^19 - UI component library
- [TypeScript](https://www.typescriptlang.org/) - Static type checking
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Node.js](https://nodejs.org/) 20.9.0+ - JavaScript runtime

### Styling

- [TailwindCSS](https://tailwindcss.com) - Utility-first CSS
- [PostCSS](https://postcss.org/) - CSS processing

### Development

- [ESLint](https://eslint.org/) - Linting
- [Prettier](https://prettier.io/) - Code formatting
- [Storybook](https://storybook.js.org/) - Component development
- [@next/bundle-analyzer](https://www.npmjs.com/package/@next/bundle-analyzer) - Bundle analysis

### APIs & Services

- [Vercel](https://vercel.com) - Hosting & CI/CD

## 🚀 Getting Started

### Prerequisites

- Node.js 20.9.0 or later
- npm 10 or later

### Development

1. Clone the repository:

```bash
git clone https://github.com/nathanjessen/portfolio.git
cd portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev        # Standard mode
npm run dev:turbo  # Turbo mode (faster builds)
```

4. Open [http://localhost:3000](http://localhost:3000)

### Available Scripts

#### Development

- `npm run dev` - Start development server
- `npm run dev:turbo` - Start with Turbo mode
- `npm run storybook` - Start Storybook

#### Building

- `npm run build` - Create production build
- `npm run start` - Start production server
- `npm run clean` - Remove build artifacts
- `npm run build-storybook` - Build Storybook

#### Quality

- `npm run typecheck` - TypeScript check
- `npm run lint` - ESLint check
- `npm run lint:fix` - ESLint autofix
- `npm run format` - Prettier format
- `npm run format:check` - Prettier check
- `npm run check` - All checks

#### Analysis

- `npm run analyze` - Bundle analysis

## 📁 Project Structure

```
portfolio/
├── app/                 # Next.js App Router pages and layouts
│   ├── [...slug]/      # Dynamic routes (contact, projects, etc.)
│   ├── about/          # About page
│   └── layout.tsx      # Root layout
├── components/         # React components (one directory per component)
├── constants/          # Data and configuration (projects, experience, etc.)
├── public/             # Static assets
├── stories/            # Full-page Storybook stories
└── styles/             # Global CSS
```

## 🔧 Configuration

### Code Style

ESLint and Prettier configuration:

- `eslint.config.mjs` - ESLint rules
- `.prettierrc` - Prettier config
- `.prettierignore` - Formatting exclusions

## 🐛 Issues

Found a bug? [Report it here](https://github.com/nathanjessen/portfolio/issues) or submit a PR with the fix.

## 📦 Deployment

Deployed on Vercel with:

- Production Branch: `main`
- Framework Preset: Next.js
- Build Command: `npm run build`
- Output Directory: `.next`

[Deployment Documentation](https://nextjs.org/docs/deployment)

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
