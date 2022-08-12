import { Meta, Story } from '@storybook/react';
import { ContactForm } from './ContactForm';

export default {
  title: 'Components/ContactForm',
  component: ContactForm,
} as Meta;

const Template: Story = (args) => <ContactForm {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
