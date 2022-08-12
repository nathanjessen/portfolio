import { Meta, Story } from '@storybook/react';
import { BasicGrid, BasicGridProps } from './BasicGrid';

export default {
  title: 'Components/BasicGrid',
  component: BasicGrid,
  args: {
    title: 'Basic Grid',
    items: ['Item 1', 'Item 2', 'Item 3'],
    render: (item: string) => <div key={item}>{item}</div>,
  },
} as Meta;

const Template: Story<BasicGridProps<string>> = (args) => (
  <BasicGrid {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const Subtitle = Template.bind({});
Subtitle.args = {
  subtitle: 'Subtitle',
};

export const NoDivider = Template.bind({});
NoDivider.args = {
  divider: false,
};
