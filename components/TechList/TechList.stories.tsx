import type { Meta, StoryObj } from '@storybook/react';
import { TechList } from './TechList';

const meta = {
  title: 'Components/TechList',
  component: TechList,
  decorators: [
    (Story) => (
      <div className='max-w-4xl'>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof TechList>;

export default meta;
type Story = StoryObj<typeof TechList>;

export const Default: Story = {
  args: {},
};
