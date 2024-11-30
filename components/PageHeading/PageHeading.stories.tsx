import type { Meta, StoryObj } from '@storybook/react';
import { PageHeading } from './PageHeading';

const meta = {
  title: 'Components/PageHeading',
  component: PageHeading,
  decorators: [
    (Story) => (
      <div className='max-w-4xl'>
        <Story />
      </div>
    ),
  ],
  args: {
    children: 'Page Title',
  },
} satisfies Meta<typeof PageHeading>;

export default meta;
type Story = StoryObj<typeof PageHeading>;

export const Default: Story = {
  args: {
    children: 'Page Title',
  },
};

export const WithLongText: Story = {
  args: {
    children:
      'This is a very long page title that might wrap to multiple lines',
  },
};
