import { Meta, StoryFn } from '@storybook/react';
import ContactPage from '../app/contact/page';

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

const Template: StoryFn = (args) => <ContactPage {...args} />;

export const Default = Template.bind({});
Default.args = {};
