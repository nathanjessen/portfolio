import { Meta, StoryFn } from '@storybook/react';
import { projects } from '../../constants/projects';
import { ProjectCardBasic, ProjectCardBasicProps } from './ProjectCardBasic';

export default {
  title: 'Components/ProjectCardBasic',
  component: ProjectCardBasic,
  args: {
    item: projects[0],
  },
} as Meta;

const Template: StoryFn<ProjectCardBasicProps> = (args) => (
  <ProjectCardBasic {...args} />
);

export const Default = Template.bind({});
Default.args = {};
