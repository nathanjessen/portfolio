import { Meta, Story } from '@storybook/react';
import { AboutMe } from './AboutMe';

export default {
  title: 'Components/AboutMe',
  component: AboutMe,
} as Meta;

const Template: Story = (args) => <AboutMe {...args} />;

export const Default = Template.bind({});
Default.args = {};
