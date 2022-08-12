import { Meta, Story } from '@storybook/react';
import AvatarPerson from '../../public/assets/images/avatar-person.png';
import { Brand, BrandProps } from './Brand';

export default {
  title: 'Components/Brand',
  component: Brand,
  args: {
    name: 'Brand Name',
  },
} as Meta;

const Template: Story<BrandProps> = (args) => <Brand {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Position = Template.bind({});
Position.args = {
  position: 'Software Developer',
};

export const Avatar = Template.bind({});
Avatar.args = {
  avatarUrl: AvatarPerson,
};

export const AvatarAndPosition = Template.bind({});
AvatarAndPosition.args = {
  ...Avatar.args,
  ...Position.args,
};
