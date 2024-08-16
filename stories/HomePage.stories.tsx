import { Meta, StoryFn } from '@storybook/react';
// import HomePage from '../app/page';

export default {
  title: 'Pages/HomePage',
  // component: HomePage,
  parameters: {
    layout: 'fullscreen',
    docs: {
      inlineStories: false,
      iframeHeight: 600,
    },
  },
  args: {
    repositories: [],
  },
} as Meta;

// const Template: StoryFn = (args) => <HomePage {...args} />;
const Template: StoryFn = (args) => <div {...args}>HomePage</div>;

export const Default = Template.bind({});
Default.args = {};
