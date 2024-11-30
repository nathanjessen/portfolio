import type { Meta, StoryObj } from '@storybook/react';
import { projects } from '../../constants/projects';
import { ProjectCardBasic } from './ProjectCardBasic';

const meta = {
  title: 'Components/ProjectCardBasic',
  component: ProjectCardBasic,
  decorators: [
    (Story) => (
      <div className='max-w-4xl'>
        <Story />
      </div>
    ),
  ],
  args: {
    item: projects[0],
  },
} satisfies Meta<typeof ProjectCardBasic>;

export default meta;
type Story = StoryObj<typeof ProjectCardBasic>;

export const Default: Story = {
  args: {},
};
