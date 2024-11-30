import type { Meta, StoryObj } from '@storybook/react';
import { repo } from '../../constants/repo';
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
    item: repo,
  },
} satisfies Meta<typeof RepoCard>;

export default meta;
type Story = StoryObj<typeof RepoCard>;

export const Default: Story = {
  args: {},
};
