import { Meta, Story } from '@storybook/react';
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

// const Template: Story = (args) => <HomePage {...args} />;
const Template: Story = (args) => <div {...args}>HomePage</div>;

export const Default = Template.bind({});
Default.args = {};
