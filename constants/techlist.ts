export interface TechItem {
  name: string;
  img: string;
  category: 'frontend' | 'styling' | 'tools' | 'testing';
  proficiency: 'expert' | 'advanced' | 'intermediate';
}

export const techlist: TechItem[] = [
  {
    name: 'React',
    img: '/images/tech/react.png',
    category: 'frontend',
    proficiency: 'expert'
  },
  {
    name: 'TypeScript',
    img: '/images/tech/typescript.png',
    category: 'frontend',
    proficiency: 'expert'
  },
  {
    name: 'Storybook',
    img: '/images/tech/storybook.png',
    category: 'tools',
    proficiency: 'expert'
  },
  {
    name: 'Tailwind',
    img: '/images/tech/tailwind.png',
    category: 'styling',
    proficiency: 'expert'
  },
  {
    name: 'Styled Components',
    img: '/images/tech/styled-components.png',
    category: 'styling',
    proficiency: 'advanced'
  },
  {
    name: 'Sass',
    img: '/images/tech/sass.png',
    category: 'styling',
    proficiency: 'expert'
  },
  {
    name: 'JavaScript',
    img: '/images/tech/javascript.png',
    category: 'frontend',
    proficiency: 'expert'
  },
  {
    name: 'HTML',
    img: '/images/tech/html.png',
    category: 'frontend',
    proficiency: 'expert'
  },
  {
    name: 'CSS',
    img: '/images/tech/css.png',
    category: 'styling',
    proficiency: 'expert'
  },
  {
    name: 'Git',
    img: '/images/tech/git.png',
    category: 'tools',
    proficiency: 'expert'
  },
  {
    name: 'VS Code',
    img: '/images/tech/vscode.png',
    category: 'tools',
    proficiency: 'expert'
  },
  {
    name: 'Jest',
    img: '/images/tech/jest.png',
    category: 'testing',
    proficiency: 'advanced'
  },
  {
    name: 'Testing Library',
    img: '/images/tech/testing-library.png',
    category: 'testing',
    proficiency: 'advanced'
  }
];
