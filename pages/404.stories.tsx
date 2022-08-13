import { Meta, Story } from '@storybook/react';
import Custom404Page from './404';

export default {
  title: 'Pages/Custom404Page',
  component: Custom404Page,
  parameters: {
    layout: 'fullscreen',
    docs: {
      inlineStories: false,
      iframeHeight: 600,
    },
  },
} as Meta;

const Template: Story = (args) => <Custom404Page {...args} />;

export const Default = Template.bind({});
Default.args = {};
