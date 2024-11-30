import type { Meta, StoryObj } from '@storybook/react';
import ContactPage from '../app/contact/page';

const meta = {
  title: 'Pages/Contact',
  component: ContactPage,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ContactPage>;

export default meta;
type Story = StoryObj<typeof ContactPage>;

export const Default: Story = {
  args: {},
};
