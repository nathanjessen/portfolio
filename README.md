# Nathan Jessen's Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-38B2AC)](https://tailwindcss.com)
[![DaisyUI](https://img.shields.io/badge/DaisyUI-4-5A0EF8)](https://daisyui.com/)
[![Storybook](https://img.shields.io/badge/Storybook-8-FF4785)](https://storybook.js.org/)

My professional portfolio website showcasing my work, experience, and skills. Built with modern web technologies and best practices.

🔗 [View Live Site](https://www.nathanjessen.com/)

## ✨ Features

- 🎨 Modern, responsive design using TailwindCSS and DaisyUI
- 📱 Mobile-first approach with a clean, minimalist UI
- ⚡ Fast page loads with Next.js 14 App Router
- 🧩 Component-driven development with Storybook
- 🔍 SEO optimized
- 📧 Contact form integration with SendGrid
- 🔄 GitHub integration for displaying repositories
- 📊 TypeScript for type safety
- 🚀 Deployed on Vercel with automatic CI/CD

## 🌐 Related Projects

The following directories are hosted on GitHub Pages in separate repositories:

- [/tokenlist/](https://github.com/nathanjessen/tokenlist) - Token list for blockchain projects
- [/slides/](https://github.com/nathanjessen/slides) - Presentation slides
- [/ioextendedlv/](https://github.com/nathanjessen/ioextendedlv) - Google I/O Extended Las Vegas
- [/knowledge/](https://github.com/nathanjessen/knowledge/) - Personal knowledge base
- [/eth-allowance/](https://github.com/nathanjessen/eth-allowance/) - Ethereum allowance checker

## 🛠️ Tech Stack

### Core
- [Next.js](https://nextjs.org) ^14.2.18 - React framework for production
- [React](https://reactjs.org) ^18.3.1 - UI component library
- [TypeScript](https://www.typescriptlang.org/) - Static type checking
- [Node.js](https://nodejs.org/) 20.9.0+ - JavaScript runtime

### Styling
- [TailwindCSS](https://tailwindcss.com) - Utility-first CSS
- [DaisyUI](https://daisyui.com/) - Tailwind components
- [PostCSS](https://postcss.org/) - CSS processing

### Development
- [ESLint](https://eslint.org/) - Linting
- [Prettier](https://prettier.io/) - Code formatting
- [Storybook](https://storybook.js.org/) - Component development
- [@next/bundle-analyzer](https://www.npmjs.com/package/@next/bundle-analyzer) - Bundle analysis

### APIs & Services
- [SendGrid](https://sendgrid.com/) - Email service
- [Octokit](https://github.com/octokit/octokit.js) - GitHub API
- [Vercel](https://vercel.com) - Hosting & CI/CD

## 🚀 Getting Started

### Prerequisites

- Node.js 20.9.0 or later
- npm 10 or later
- GitHub account (for API integration)
- SendGrid account (for contact form)

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

3. Set up environment variables:
```bash
cp .env.example .env.local
# Edit .env.local with your API keys
```

4. Start the development server:
```bash
npm run dev        # Standard mode
npm run dev:turbo  # Turbo mode (faster builds)
```

5. Open [http://localhost:3000](http://localhost:3000)

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
├── app/                 # Next.js app directory
│   ├── api/            # API routes
│   ├── (routes)/       # Page routes
│   └── layout.tsx      # Root layout
├── components/         # React components
│   ├── ui/            # UI components
│   └── features/      # Feature components
├── constants/         # Constants and config
├── lib/              # Utility functions
├── public/           # Static assets
├── stories/          # Storybook stories
└── types/           # TypeScript types
```

## 🔧 Configuration

### Environment Variables

Required environment variables:

- `GITHUB_AUTH_TOKEN` - GitHub personal access token
- `SENDGRID_API_KEY` - SendGrid API key

### Code Style

ESLint and Prettier configuration:

- `.eslintrc.json` - ESLint rules
- `.prettierrc` - Prettier config
- `.prettierignore` - Formatting exclusions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🐛 Issues

Found a bug? [Report it here](https://github.com/nathanjessen/nathanjessen.github.com/issues) or submit a PR with the fix.

## 📦 Deployment

Deployed on Vercel with:

- Production Branch: `main`
- Framework Preset: Next.js
- Build Command: `npm run build`
- Output Directory: `.next`

[Deployment Documentation](https://nextjs.org/docs/deployment)

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://reactjs.org/docs)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
