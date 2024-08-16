import { Meta, StoryFn } from '@storybook/react';
import { PageHeading } from './PageHeading';

export default {
  title: 'Components/PageHeading',
  component: PageHeading,
} as Meta;

const Template: StoryFn = (args) => <PageHeading {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Page Heading',
};
