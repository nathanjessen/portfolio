import { Meta, StoryFn } from '@storybook/react';
import { HomeHero } from './HomeHero';

export default {
  title: 'Components/HomeHero',
  component: HomeHero,
} as Meta;

const Template: StoryFn = (args) => <HomeHero {...args} />;

export const Default = Template.bind({});
Default.args = {};
