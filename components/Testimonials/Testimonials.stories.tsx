import { Meta, Story } from '@storybook/react';
import { testimonials } from '../../constants/testimonials';
import { Testimonials, TestimonialsProps } from './Testimonials';

export default {
  title: 'Components/Testimonials',
  component: Testimonials,
  args: {
    testimonials: testimonials,
  },
} as Meta;

const Template: Story<TestimonialsProps> = (args) => <Testimonials {...args} />;

export const Default = Template.bind({});
Default.args = {};
