import { Meta, StoryFn } from '@storybook/react';
import { AboutMe } from './AboutMe';

export default {
  title: 'Components/AboutMe',
  component: AboutMe,
} as Meta;

const Template: StoryFn = (args) => <AboutMe {...args} />;

export const Default = Template.bind({});
Default.args = {};
