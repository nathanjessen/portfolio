import { Meta, Story } from '@storybook/react';
import { PageHeading } from './PageHeading';

export default {
  title: 'Components/PageHeading',
  component: PageHeading,
} as Meta;

const Template: Story = (args) => <PageHeading {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Page Heading',
};
