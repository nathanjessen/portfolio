import type { Meta, StoryObj } from '@storybook/react';
import { ExperienceCard } from './ExperienceCard';

const meta = {
  title: 'Components/ExperienceCard',
  component: ExperienceCard,
  decorators: [
    (Story) => (
      <div className='m-10 max-w-xl'>
        <Story />
      </div>
    ),
  ],
  args: {
    title: 'Experience Card',
  },
} satisfies Meta<typeof ExperienceCard>;

export default meta;
type Story = StoryObj<typeof ExperienceCard>;

export const Default: Story = {
  args: {},
};

export const Description: Story = {
  args: {
    desc: 'This is a description of the experience card',
  },
};

export const Year: Story = {
  args: {
    year: '2020',
  },
};

export const Company: Story = {
  args: {
    company: 'Company Name',
  },
};

export const CompanyLink: Story = {
  args: {
    company: 'Company Name',
    companyLink: '#none',
  },
};
