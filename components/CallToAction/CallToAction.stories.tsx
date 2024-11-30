import type { Meta, StoryObj } from '@storybook/react';
import { CallToAction } from './CallToAction';

const meta = {
  title: 'Components/CallToAction',
  component: CallToAction,
  decorators: [
    (Story) => (
      <div className='max-w-4xl'>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof CallToAction>;

export default meta;
type Story = StoryObj<typeof CallToAction>;

export const Default: Story = {
  args: {},
};
