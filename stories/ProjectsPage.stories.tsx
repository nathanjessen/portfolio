import type { Meta, StoryObj } from '@storybook/react';
import ProjectsPage from '../app/projects/page';

const meta = {
  title: 'Pages/Projects',
  component: ProjectsPage,
  parameters: {
    layout: 'fullscreen',
    docs: {
      inlineStories: false,
      iframeHeight: 600,
    },
  },
} satisfies Meta<typeof ProjectsPage>;

export default meta;
type Story = StoryObj<typeof ProjectsPage>;

export const Default: Story = {
  args: {},
};
