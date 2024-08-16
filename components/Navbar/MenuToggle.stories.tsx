import { Meta, StoryFn } from '@storybook/react';
import { MenuToggle } from './MenuToggle';

export default {
  title: 'Components/MenuToggle',
  component: MenuToggle,
} as Meta;

const Template: StoryFn = (args) => <MenuToggle {...args} />;

export const Default = Template.bind({});
Default.args = {};
