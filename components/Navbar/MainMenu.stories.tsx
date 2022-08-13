import { Meta, Story } from '@storybook/react';
import { MainMenu } from './MainMenu';

export default {
  title: 'Components/MainMenu',
  component: MainMenu,
} as Meta;

const Template: Story = (args) => <MainMenu {...args} />;

export const Default = Template.bind({});
Default.args = {};
