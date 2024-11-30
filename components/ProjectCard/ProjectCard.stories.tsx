import type { Meta, StoryObj } from '@storybook/react';
import { projects } from '../../constants/projects';
import { ProjectCard } from './ProjectCard';

const meta = {
  title: 'Components/ProjectCard',
  component: ProjectCard,
  decorators: [
    (Story) => (
      <div className='max-w-lg'>
        <Story />
      </div>
    ),
  ],
  args: {
    item: projects[0],
  },
} satisfies Meta<typeof ProjectCard>;

export default meta;
type Story = StoryObj<typeof ProjectCard>;

export const Default: Story = {
  args: {},
};
