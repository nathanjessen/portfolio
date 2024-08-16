import { Meta, StoryFn } from '@storybook/react';
import { SocialNav } from './SocialNav';

export default {
  title: 'Components/SocialNav',
  component: SocialNav,
} as Meta;

const Template: StoryFn = (args) => <SocialNav {...args} />;

export const Default = Template.bind({});
Default.args = {};
