import { Meta, Story } from '@storybook/react';
import { Navbar } from './Navbar';

export default {
  title: 'Components/Navbar',
  component: Navbar,
  decorators: [
    (Story) => (
      <div className='translate-x-0 h-32'>
        <Story />
      </div>
    ),
  ],
} as Meta;

const Template: Story = (args) => <Navbar {...args} />;

export const Default = Template.bind({});
Default.args = {};
