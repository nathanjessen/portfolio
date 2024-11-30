import type { Meta, StoryObj } from '@storybook/react';
import AboutPage from '../app/about/page';

const meta = {
  title: 'Pages/About',
  component: AboutPage,
  parameters: {
    layout: 'fullscreen',
    docs: {
      inlineStories: false,
      iframeHeight: 600,
    },
  },
} satisfies Meta<typeof AboutPage>;

export default meta;
type Story = StoryObj<typeof AboutPage>;

export const Default: Story = {
  args: {},
};
