import { Meta, StoryFn } from '@storybook/react';
import { repo } from '../../constants/repo';
import { RepoCard, RepoCardProps } from './RepoCard';

export default {
  title: 'Components/RepoCard',
  component: RepoCard,
  args: {
    item: repo,
  },
} as Meta;

const Template: StoryFn<RepoCardProps> = (args) => <RepoCard {...args} />;

export const Default = Template.bind({});
Default.args = {};
