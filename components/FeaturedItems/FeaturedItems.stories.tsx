import { Meta, Story } from '@storybook/react';
import { FeaturedItems, FeaturedItemsProps } from './FeaturedItems';

export default {
  title: 'Components/FeaturedItems',
  component: FeaturedItems,
  args: {
    title: 'Featured Items',
    subtitle: 'Subtitle',
    items: [
      'Featured 1',
      'Featured 2',
      'Featured 3',
      'Featured 4',
      'Featured 5',
    ],
    render: (item: string) => <div>{item}</div>,
  },
} as Meta;

const Template: Story<FeaturedItemsProps<string>> = (args) => (
  <FeaturedItems {...args} />
);

export const Default = Template.bind({});
Default.args = {};
