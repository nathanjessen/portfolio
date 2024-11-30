import type { Meta, StoryObj } from '@storybook/react';
import { ContactForm } from './ContactForm';

const meta = {
  title: 'Components/ContactForm',
  component: ContactForm,
  decorators: [
    (Story) => (
      <div className='max-w-4xl'>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ContactForm>;

export default meta;
type Story = StoryObj<typeof ContactForm>;

export const Default: Story = {
  args: {},
};
