import type { Meta, StoryObj } from '@storybook/react';
import { AboutMe } from './AboutMe';

const meta = {
  title: 'Components/AboutMe',
  component: AboutMe,
  decorators: [
    (Story) => (
      <div className='max-w-4xl'>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof AboutMe>;

export default meta;
type Story = StoryObj<typeof AboutMe>;

export const Default: Story = {
  args: {},
};
