import type { Meta, StoryObj } from '@storybook/react';
import { Experience } from './Experience';

const meta = {
  title: 'Components/Experience',
  component: Experience,
  decorators: [
    (Story) => (
      <div className='max-w-4xl'>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Experience>;

export default meta;
type Story = StoryObj<typeof Experience>;

export const Default: Story = {
  args: {},
};
