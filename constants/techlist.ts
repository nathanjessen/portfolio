export interface TechItem {
  name: string;
  img: string;
  category:
    | 'frontend'
    | 'styling'
    | 'tools'
    | 'testing'
    | 'build'
    | 'performance';
  proficiency: 'expert' | 'advanced' | 'intermediate';
}

export const techlist: TechItem[] = [
  // Frontend Framework Core
  {
    name: 'React',
    img: '/images/tech/react.png',
    category: 'frontend',
    proficiency: 'expert',
  },
  {
    name: 'Next.js',
    img: '/images/tech/nextjs.svg',
    category: 'frontend',
    proficiency: 'expert',
  },
  {
    name: 'TypeScript',
    img: '/images/tech/typescript.png',
    category: 'frontend',
    proficiency: 'expert',
  },
  {
    name: 'JavaScript',
    img: '/images/tech/javascript.png',
    category: 'frontend',
    proficiency: 'expert',
  },
  {
    name: 'HTML',
    img: '/images/tech/html.png',
    category: 'frontend',
    proficiency: 'expert',
  },

  // Styling
  {
    name: 'CSS',
    img: '/images/tech/css.png',
    category: 'styling',
    proficiency: 'expert',
  },
  {
    name: 'Tailwind',
    img: '/images/tech/tailwind.png',
    category: 'styling',
    proficiency: 'expert',
  },
  {
    name: 'Styled Components',
    img: '/images/tech/styled-components.png',
    category: 'styling',
    proficiency: 'advanced',
  },
  {
    name: 'Sass',
    img: '/images/tech/sass.png',
    category: 'styling',
    proficiency: 'expert',
  },
  {
    name: 'CSS Modules',
    img: '/images/tech/css-modules.png',
    category: 'styling',
    proficiency: 'expert',
  },

  // Development Tools
  {
    name: 'Storybook',
    img: '/images/tech/storybook.png',
    category: 'tools',
    proficiency: 'expert',
  },
  {
    name: 'Git',
    img: '/images/tech/git.png',
    category: 'tools',
    proficiency: 'expert',
  },
  {
    name: 'VS Code',
    img: '/images/tech/vscode.png',
    category: 'tools',
    proficiency: 'expert',
  },
  {
    name: 'Figma',
    img: '/images/tech/figma.png',
    category: 'tools',
    proficiency: 'advanced',
  },
  {
    name: 'Chrome DevTools',
    img: '/images/tech/chrome-devtools.svg',
    category: 'tools',
    proficiency: 'expert',
  },

  // Testing
  {
    name: 'Jest',
    img: '/images/tech/jest.png',
    category: 'testing',
    proficiency: 'advanced',
  },
  {
    name: 'Testing Library',
    img: '/images/tech/testing-library.png',
    category: 'testing',
    proficiency: 'advanced',
  },
  {
    name: 'Cypress',
    img: '/images/tech/cypress.png',
    category: 'testing',
    proficiency: 'advanced',
  },
  {
    name: 'Playwright',
    img: '/images/tech/playwright.png',
    category: 'testing',
    proficiency: 'intermediate',
  },

  // Build Tools & Performance
  {
    name: 'Webpack',
    img: '/images/tech/webpack.png',
    category: 'build',
    proficiency: 'advanced',
  },
  {
    name: 'Vite',
    img: '/images/tech/vite.png',
    category: 'build',
    proficiency: 'advanced',
  },
  {
    name: 'Lighthouse',
    img: '/images/tech/lighthouse.png',
    category: 'performance',
    proficiency: 'expert',
  },
  {
    name: 'Web Vitals',
    img: '/images/tech/web-vitals.svg',
    category: 'performance',
    proficiency: 'expert',
  },
];
