import type { Meta, StoryObj } from '@storybook/react';
import { Contact } from './Contact';

const meta = {
  title: 'Components/Contact',
  component: Contact,
  decorators: [
    (Story) => (
      <div className='max-w-4xl'>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Contact>;

export default meta;
type Story = StoryObj<typeof Contact>;

export const Default: Story = {
  args: {},
};
