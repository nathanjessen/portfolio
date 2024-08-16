import { Meta, StoryFn } from '@storybook/react';
import { MobileMenu } from './MobileMenu';

export default {
  title: 'Components/MobileMenu',
  component: MobileMenu,
} as Meta;

const Template: StoryFn = (args) => <MobileMenu {...args} />;

export const Default = Template.bind({});
Default.args = {};
