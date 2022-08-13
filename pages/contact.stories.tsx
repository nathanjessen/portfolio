import { Meta, Story } from '@storybook/react';
import ContactPage from './contact';

export default {
  title: 'Pages/ContactPage',
  component: ContactPage,
  parameters: {
    layout: 'fullscreen',
    docs: {
      inlineStories: false,
      iframeHeight: 600,
    },
  },
} as Meta;

const Template: Story = (args) => <ContactPage {...args} />;

export const Default = Template.bind({});
Default.args = {};
