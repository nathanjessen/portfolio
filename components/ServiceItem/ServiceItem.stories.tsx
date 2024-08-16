import { Meta, StoryFn } from '@storybook/react';
import { services } from '../../constants/services';
import { ServiceItem, ServiceItemProps } from './ServiceItem';

export default {
  title: 'Components/ServiceItem',
  component: ServiceItem,
  args: {
    item: services[0],
  },
} as Meta;

const Template: StoryFn<ServiceItemProps> = (args) => <ServiceItem {...args} />;

export const Default = Template.bind({});
Default.args = {};
