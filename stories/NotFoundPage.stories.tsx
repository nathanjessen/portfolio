import type { Meta, StoryObj } from '@storybook/react';
import NotFoundPage from '../app/not-found';

const meta = {
  title: 'Pages/NotFound',
  component: NotFoundPage,
  parameters: {
    layout: 'fullscreen',
    docs: {
      inlineStories: false,
      iframeHeight: 600,
    },
  },
} satisfies Meta<typeof NotFoundPage>;

export default meta;
type Story = StoryObj<typeof NotFoundPage>;

export const Default: Story = {
  args: {},
};
