import { Meta, StoryFn } from '@storybook/react';
import { ExperienceCard, ExperienceCardProps } from './ExperienceCard';

export default {
  title: 'Components/ExperienceCard',
  component: ExperienceCard,
  decorators: [(StoryFn) => <div className='m-10 max-w-xl'>{StoryFn()}</div>],
  args: {
    title: 'Experience Card',
  },
} as Meta;

const Template: StoryFn<ExperienceCardProps> = (args) => (
  <ExperienceCard {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const Description = Template.bind({});
Description.args = {
  desc: 'This is a description of the experience card',
};

export const Year = Template.bind({});
Year.args = {
  year: '2020',
};

export const Company = Template.bind({});
Company.args = {
  company: 'Company Name',
};

export const CompanyLink = Template.bind({});
CompanyLink.args = {
  ...Company.args,
  companyLink: '#none',
};
