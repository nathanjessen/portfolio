import type { Meta, StoryObj } from '@storybook/react';
import HomePage from '../app/page';

const meta = {
  title: 'Pages/Home',
  component: HomePage,
  parameters: {
    layout: 'fullscreen',
    docs: {
      inlineStories: false,
      iframeHeight: 600,
    },
  },
} satisfies Meta<typeof HomePage>;

export default meta;
type Story = StoryObj<typeof HomePage>;

export const Default: Story = {
  args: {
    repositories: [],
  },
};
