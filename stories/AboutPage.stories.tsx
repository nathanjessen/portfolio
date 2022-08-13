import { Meta, Story } from '@storybook/react';
import AboutPage from '../pages/about';

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

const Template: Story = (args) => <AboutPage {...args} />;

export const Default = Template.bind({});
Default.args = {};
