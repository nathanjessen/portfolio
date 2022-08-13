import { Meta, Story } from '@storybook/react';
import HomePage, { HomePageProps } from '../pages/index';

export default {
  title: 'Pages/HomePage',
  component: HomePage,
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

const Template: Story<HomePageProps> = (args) => <HomePage {...args} />;

export const Default = Template.bind({});
Default.args = {};
