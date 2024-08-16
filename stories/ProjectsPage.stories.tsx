import { Meta, StoryFn } from '@storybook/react';
import ProjectsPage from '../app/projects/page';

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

const Template: StoryFn = (args) => <ProjectsPage {...args} />;

export const Default = Template.bind({});
Default.args = {};
