import { Meta, StoryFn } from '@storybook/react';
import { ContactForm } from './ContactForm';

export default {
  title: 'Components/ContactForm',
  component: ContactForm,
} as Meta;

const Template: StoryFn = (args) => <ContactForm {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
