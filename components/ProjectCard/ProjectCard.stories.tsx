import { Meta, StoryFn } from '@storybook/react';
import { projects } from '../../constants/projects';
import { ProjectCard, ProjectCardProps } from './ProjectCard';

export default {
  title: 'Components/ProjectCard',
  component: ProjectCard,
  decorators: [(StoryFn) => <div className='max-w-lg'>{StoryFn()}</div>],
  args: {
    item: projects[0],
  },
} as Meta;

const Template: StoryFn<ProjectCardProps> = (args) => <ProjectCard {...args} />;

export const Default = Template.bind({});
Default.args = {};
