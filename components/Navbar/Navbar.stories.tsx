import type { Meta, StoryObj } from '@storybook/nextjs';
import { Navbar } from './Navbar';

const meta = {
  title: 'Components/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
  args: {},
};
