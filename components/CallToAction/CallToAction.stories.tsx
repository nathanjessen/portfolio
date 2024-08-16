import { Meta, StoryFn } from '@storybook/react';
import { CallToAction } from './CallToAction';

export default {
  title: 'Components/CallToAction',
  component: CallToAction,
} as Meta;

const Template: StoryFn = (args) => <CallToAction {...args} />;

export const Default = Template.bind({});
Default.args = {};
