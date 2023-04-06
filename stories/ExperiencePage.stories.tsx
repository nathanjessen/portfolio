import { Meta, Story } from '@storybook/react';
import ExperiencePage from '../app/experience/page';

export default {
  title: 'Pages/ExperiencePage',
  component: ExperiencePage,
  parameters: {
    layout: 'fullscreen',
    docs: {
      inlineStories: false,
      iframeHeight: 600,
    },
  },
} as Meta;

const Template: Story = (args) => <ExperiencePage {...args} />;

export const Default = Template.bind({});
Default.args = {};
