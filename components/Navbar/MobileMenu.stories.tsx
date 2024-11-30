import type { Meta, StoryObj } from '@storybook/react';
import { MobileMenu } from './MobileMenu';

const meta = {
  title: 'Components/MobileMenu',
  component: MobileMenu,
  decorators: [
    (Story) => (
      <div className='max-w-4xl'>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof MobileMenu>;

export default meta;
type Story = StoryObj<typeof MobileMenu>;

export const Default: Story = {
  args: {},
};
