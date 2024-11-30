import type { Meta, StoryObj } from '@storybook/react';
import { MenuToggle } from './MenuToggle';

const meta = {
  title: 'Components/MenuToggle',
  component: MenuToggle,
  decorators: [
    (Story) => (
      <div className='max-w-4xl'>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof MenuToggle>;

export default meta;
type Story = StoryObj<typeof MenuToggle>;

export const Default: Story = {
  args: {},
};
