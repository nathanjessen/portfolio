import { Meta, Story } from '@storybook/react';
import { HomeHero } from './HomeHero';

export default {
  title: 'Components/HomeHero',
  component: HomeHero,
} as Meta;

const Template: Story = (args) => <HomeHero {...args} />;

export const Default = Template.bind({});
Default.args = {};
