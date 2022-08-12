import { Meta, Story } from '@storybook/react';
import { Experience } from './Experience';

export default {
  title: 'Components/Experience',
  component: Experience,
} as Meta;

const Template: Story = (args) => <Experience {...args} />;

export const Default = Template.bind({});
Default.args = {};
