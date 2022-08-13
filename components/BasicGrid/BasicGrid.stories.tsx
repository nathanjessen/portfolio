import { Meta, Story } from '@storybook/react';
import ProjectCard from '../ProjectCard';
import * as ProjectCardStories from '../ProjectCard/ProjectCard.stories';
import { ProjectCardBasic } from '../ProjectCard/ProjectCardBasic';
import * as ProjectCardBasicStories from '../ProjectCard/ProjectCardBasic.stories';
import RepoCard from '../RepoCard';
import * as RepoCardStories from '../RepoCard/RepoCard.stories';
import ServiceItem from '../ServiceItem';
import * as ServiceItemStories from '../ServiceItem/ServiceItem.stories';
import { BasicGrid, BasicGridProps } from './BasicGrid';

export default {
  title: 'Components/BasicGrid',
  component: BasicGrid,
  args: {
    title: 'Basic Grid',
    items: ['Item 1', 'Item 2', 'Item 3'],
    render: (item: string) => <div key={item}>{item}</div>,
  },
} as Meta;

const Template: Story<BasicGridProps<any>> = (args) => <BasicGrid {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Subtitle = Template.bind({});
Subtitle.args = {
  subtitle: 'Subtitle',
};

export const NoDivider = Template.bind({});
NoDivider.args = {
  divider: false,
};

export const RenderProjectCard = Template.bind({});
RenderProjectCard.args = {
  subtitle: 'Project Card',
  items: [
    { ...ProjectCardStories.default.args?.item },
    { ...ProjectCardStories.default.args?.item },
    { ...ProjectCardStories.default.args?.item },
  ],
  render: (project, idx) => <ProjectCard item={project} key={idx} />,
};

export const RenderProjectCardBasic = Template.bind({});
RenderProjectCardBasic.args = {
  subtitle: 'Project Card Basic',
  items: [
    { ...ProjectCardBasicStories.default.args?.item },
    { ...ProjectCardBasicStories.default.args?.item },
    { ...ProjectCardBasicStories.default.args?.item },
  ],
  render: (project, idx) => <ProjectCardBasic item={project} key={idx} />,
};

export const RenderRepoCard = Template.bind({});
RenderRepoCard.args = {
  subtitle: 'Repo Card',
  items: [
    { ...RepoCardStories.default.args?.item },
    { ...RepoCardStories.default.args?.item },
    { ...RepoCardStories.default.args?.item },
  ],
  render: (repo, idx) => <RepoCard item={repo} key={idx} />,
};

export const RenderServiceItem = Template.bind({});
RenderServiceItem.args = {
  subtitle: 'Service Item',
  items: [
    { ...ServiceItemStories.default.args?.item },
    { ...ServiceItemStories.default.args?.item },
    { ...ServiceItemStories.default.args?.item },
  ],
  render: (service, idx) => <ServiceItem item={service} key={idx} />,
};
