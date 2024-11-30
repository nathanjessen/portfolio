import type { Meta, StoryObj } from '@storybook/react';
import { services } from '../../constants/services';
import { ServiceItem } from './ServiceItem';

const meta = {
  title: 'Components/ServiceItem',
  component: ServiceItem,
  decorators: [
    (Story) => (
      <div className='max-w-4xl'>
        <Story />
      </div>
    ),
  ],
  args: {
    item: services[0],
  },
} satisfies Meta<typeof ServiceItem>;

export default meta;
type Story = StoryObj<typeof ServiceItem>;

export const Default: Story = {
  args: {},
};
