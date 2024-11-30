import type { Meta, StoryObj } from '@storybook/react';
import { projects } from '../../constants/projects';
import { FeaturedItems } from './FeaturedItems';

const meta = {
  title: 'Components/FeaturedItems',
  component: FeaturedItems,
  decorators: [
    (Story) => (
      <div className='max-w-4xl'>
        <Story />
      </div>
    ),
  ],
  args: {
    items: projects,
  },
} satisfies Meta<typeof FeaturedItems>;

export default meta;
type Story = StoryObj<typeof FeaturedItems>;

export const Default: Story = {
  args: {},
};
