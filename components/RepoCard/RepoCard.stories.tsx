import type { Meta, StoryObj } from '@storybook/react';
import { RepoCard } from './RepoCard';

const meta = {
  title: 'Components/RepoCard',
  component: RepoCard,
  decorators: [
    (Story) => (
      <div className='max-w-4xl'>
        <Story />
      </div>
    ),
  ],
  args: {
    item: {
      name: 'portfolio',
      description:
        'My personal portfolio website built with Next.js, TypeScript, and Tailwind CSS.',
      clone_url: 'https://github.com/yourusername/portfolio',
      language: 'TypeScript',
      stargazers_count: 42,
      forks_count: 12,
    },
    index: 0,
  },
} satisfies Meta<typeof RepoCard>;

export default meta;
type Story = StoryObj<typeof RepoCard>;

export const Default: Story = {
  args: {},
};
