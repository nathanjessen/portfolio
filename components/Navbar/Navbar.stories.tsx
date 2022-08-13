import { Meta, Story } from '@storybook/react';
import { Navbar } from './Navbar';

export default {
  title: 'Components/Navbar',
  component: Navbar,
} as Meta;

const Template: Story = (args) => <Navbar {...args} />;

export const Default = Template.bind({});
Default.args = {};
