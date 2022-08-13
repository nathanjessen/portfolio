import { Meta, Story } from '@storybook/react';
import { MenuToggle } from './MenuToggle';

export default {
  title: 'Components/MenuToggle',
  component: MenuToggle,
} as Meta;

const Template: Story = (args) => <MenuToggle {...args} />;

export const Default = Template.bind({});
Default.args = {};
