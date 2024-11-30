import type { Meta, StoryObj } from '@storybook/react';
import ExperiencePage from '../app/experience/page';

const meta = {
  title: 'Pages/Experience',
  component: ExperiencePage,
  parameters: {
    layout: 'fullscreen',
    docs: {
      inlineStories: false,
      iframeHeight: 600,
    },
  },
} satisfies Meta<typeof ExperiencePage>;

export default meta;
type Story = StoryObj<typeof ExperiencePage>;

export const Default: Story = {
  args: {},
};
