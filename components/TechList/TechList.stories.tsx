import { Meta, StoryFn } from '@storybook/react';
import { TechList } from './TechList';

export default {
  title: 'Components/TechList',
  component: TechList,
} as Meta;

const Template: StoryFn = (args) => <TechList {...args} />;

export const Default = Template.bind({});
Default.args = {};
