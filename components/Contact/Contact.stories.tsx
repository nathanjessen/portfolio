import { Meta, StoryFn } from '@storybook/react';
import { Contact } from './Contact';

export default {
  title: 'Components/Contact',
  component: Contact,
} as Meta;

const Template: StoryFn = (args) => <Contact {...args} />;

export const Default = Template.bind({});
Default.args = {};
