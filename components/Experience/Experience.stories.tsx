import { Meta, StoryFn } from '@storybook/react';
import { Experience } from './Experience';

export default {
  title: 'Components/Experience',
  component: Experience,
} as Meta;

const Template: StoryFn = (args) => <Experience {...args} />;

export const Default = Template.bind({});
Default.args = {};
