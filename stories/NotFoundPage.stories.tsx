import { Meta, Story } from '@storybook/react';
import NotFoundPage from '../app/not-found';

export default {
  title: 'Pages/NotFoundPage',
  component: NotFoundPage,
  parameters: {
    layout: 'fullscreen',
    docs: {
      inlineStories: false,
      iframeHeight: 600,
    },
  },
} as Meta;

const Template: Story = (args) => <NotFoundPage {...args} />;

export const Default = Template.bind({});
Default.args = {};
