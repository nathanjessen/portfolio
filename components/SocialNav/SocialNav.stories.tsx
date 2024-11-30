import type { Meta, StoryObj } from '@storybook/react';
import { SocialNav } from './SocialNav';

const meta = {
  title: 'Components/SocialNav',
  component: SocialNav,
  decorators: [
    (Story) => (
      <div className='max-w-4xl'>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof SocialNav>;

export default meta;
type Story = StoryObj<typeof SocialNav>;

export const Default: Story = {
  args: {},
};
