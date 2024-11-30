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
    title: 'Page Title',
  },
} satisfies Meta<typeof PageHeading>;

export default meta;
type Story = StoryObj<typeof PageHeading>;

export const Default: Story = {
  args: {},
};

export const WithSubtitle: Story = {
  args: {
    subtitle: 'This is a subtitle',
  },
};
