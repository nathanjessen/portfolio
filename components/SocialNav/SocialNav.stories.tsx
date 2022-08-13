import { Meta, Story } from '@storybook/react';
import { SocialNav } from './SocialNav';

export default {
  title: 'Components/SocialNav',
  component: SocialNav,
} as Meta;

const Template: Story = (args) => <SocialNav {...args} />;

export const Default = Template.bind({});
Default.args = {};
