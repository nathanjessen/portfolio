import type { Meta, StoryObj } from '@storybook/react';
import { MainMenu } from './MainMenu';

const meta = {
  title: 'Components/MainMenu',
  component: MainMenu,
  decorators: [
    (Story) => (
      <div className='max-w-4xl'>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof MainMenu>;

export default meta;
type Story = StoryObj<typeof MainMenu>;

export const Default: Story = {
  args: {},
};
