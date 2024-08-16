import { Meta, StoryFn } from '@storybook/react';
import { Navbar } from './Navbar';

export default {
  title: 'Components/Navbar',
  component: Navbar,
  decorators: [
    (StoryFn) => (
      <div className='translate-x-0 h-32'>
        <StoryFn />
      </div>
    ),
  ],
} as Meta;

const Template: StoryFn = (args) => <Navbar {...args} />;

export const Default = Template.bind({});
Default.args = {};
