import { Meta, StoryFn } from '@storybook/react';
import { testimonials } from '../../constants/testimonials';
import { Testimonials, TestimonialsProps } from './Testimonials';

export default {
  title: 'Components/Testimonials',
  component: Testimonials,
  args: {
    testimonials: testimonials,
  },
} as Meta;

const Template: StoryFn<TestimonialsProps> = (args) => (
  <Testimonials {...args} />
);

export const Default = Template.bind({});
Default.args = {};
