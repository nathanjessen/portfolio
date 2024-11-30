# Portfolio

My personal website built with Next.js.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Directories

Some directories are created using GitHub pages in other repositories.

- [/tokenlist/](https://github.com/nathanjessen/tokenlist)
- [/slides/](https://github.com/nathanjessen/slides)
- [/ioextendedlv/](https://github.com/nathanjessen/ioextendedlv)
- [/knowledge/](https://github.com/nathanjessen/knowledge/)
- [/eth-allowance/](https://github.com/nathanjessen/eth-allowance/)

## Technologies

The website is built with modern technologies and deployed on [Vercel](https://vercel.com)

### Core
- [Next.js 14](https://nextjs.org) for building React Components
- [React 18](https://reactjs.org) for the UI library
- [TypeScript](https://www.typescriptlang.org/) for type safety
- [Node.js](https://nodejs.org/) for the runtime environment

### Styling
- [TailwindCSS](https://tailwindcss.com) for styling
- [DaisyUI](https://daisyui.com/) for Tailwind components
- [PostCSS](https://postcss.org/) for CSS processing

### Development Tools
- [ESLint](https://eslint.org/) for code linting
- [Storybook](https://storybook.js.org/) for component development
- [@next/bundle-analyzer](https://www.npmjs.com/package/@next/bundle-analyzer) for bundle analysis

### APIs and Services
- [SendGrid](https://sendgrid.com/) for email services
- [Octokit](https://github.com/octokit/octokit.js) for GitHub API integration
- [Vercel](https://vercel.com) for deployments and CI/CD

## Getting Started

### Prerequisites
- Node.js 20.9.0 or later
- npm 10 or later

### Development

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
# Standard development server
npm run dev

# Or with Turbo mode (faster builds)
npm run dev:turbo
```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Available Scripts

#### Development
- `npm run dev` - Start development server
- `npm run dev:turbo` - Start development server with Turbo mode
- `npm run storybook` - Start Storybook development environment

#### Building
- `npm run build` - Create production build
- `npm run start` - Start production server
- `npm run clean` - Remove build artifacts
- `npm run build-storybook` - Build Storybook static site

#### Quality Checks
- `npm run typecheck` - Run TypeScript type checking
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Run ESLint with auto-fix
- `npm run check` - Run both lint and type checks

#### Analysis
- `npm run analyze` - Analyze bundle size

## Project Structure

```
portfolio/
├── app/             # Next.js 14 app directory
├── components/      # React components
├── constants/       # Constants and configuration
├── public/         # Static assets
└── stories/        # Storybook stories
```

## Environment Variables

The following environment variables are required:

- `GITHUB_AUTH_TOKEN` - GitHub API token
- `SENDGRID_API_KEY` - SendGrid API key

## Issues

If you discover a bug, [report it here](https://github.com/nathanjessen/nathanjessen.github.com/issues) or even better, edit and send a pull-request with the fix.

## Deployment

This site is deployed on Vercel with the following configuration:

- Production Branch: `main`
- Framework Preset: Next.js
- Build Command: `npm run build`
- Output Directory: `.next`

For more details, check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment).

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
