import { Meta, Story } from '@storybook/react';
import { MobileMenu } from './MobileMenu';

export default {
  title: 'Components/MobileMenu',
  component: MobileMenu,
} as Meta;

const Template: Story = (args) => <MobileMenu {...args} />;

export const Default = Template.bind({});
Default.args = {};
