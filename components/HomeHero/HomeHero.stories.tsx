import type { Meta, StoryObj } from '@storybook/react';
import { HomeHero } from './HomeHero';

const meta = {
  title: 'Components/HomeHero',
  component: HomeHero,
  decorators: [
    (Story) => (
      <div className='max-w-4xl'>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof HomeHero>;

export default meta;
type Story = StoryObj<typeof HomeHero>;

export const Default: Story = {
  args: {},
};
