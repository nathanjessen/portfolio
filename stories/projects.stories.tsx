import { Meta, Story } from '@storybook/react';
import ProjectsPage from '../pages/projects';

export default {
  title: 'Pages/ProjectsPage',
  component: ProjectsPage,
  parameters: {
    layout: 'fullscreen',
    docs: {
      inlineStories: false,
      iframeHeight: 600,
    },
  },
} as Meta;

const Template: Story = (args) => <ProjectsPage {...args} />;

export const Default = Template.bind({});
Default.args = {};
