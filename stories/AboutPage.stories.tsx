import { Meta, StoryFn } from '@storybook/react';
import AboutPage from '../app/about/page';

export default {
  title: 'Pages/AboutPage',
  component: AboutPage,
  parameters: {
    layout: 'fullscreen',
    docs: {
      inlineStories: false,
      iframeHeight: 600,
    },
  },
} as Meta;

const Template: StoryFn = (args) => <AboutPage {...args} />;

export const Default = Template.bind({});
Default.args = {};
