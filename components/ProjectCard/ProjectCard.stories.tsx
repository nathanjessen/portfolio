import { Meta, Story } from '@storybook/react';
import { projects } from '../../constants/projects';
import { ProjectCard, ProjectCardProps } from './ProjectCard';

export default {
  title: 'Components/ProjectCard',
  component: ProjectCard,
  decorators: [(Story) => <div className='max-w-lg'>{Story()}</div>],
  args: {
    item: projects[0],
  },
} as Meta;

const Template: Story<ProjectCardProps> = (args) => <ProjectCard {...args} />;

export const Default = Template.bind({});
Default.args = {};
