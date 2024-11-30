import type { Meta, StoryObj } from '@storybook/react';
import { testimonials } from '../../constants/testimonials';
import { Testimonials } from './Testimonials';

const meta = {
  title: 'Components/Testimonials',
  component: Testimonials,
  decorators: [
    (Story) => (
      <div className='max-w-4xl'>
        <Story />
      </div>
    ),
  ],
  args: {
    items: testimonials,
  },
} satisfies Meta<typeof Testimonials>;

export default meta;
type Story = StoryObj<typeof Testimonials>;

export const Default: Story = {
  args: {},
};
