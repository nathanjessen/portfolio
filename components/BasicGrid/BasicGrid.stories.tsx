import type { Meta, StoryObj } from '@storybook/react';
import ProjectCard from '../ProjectCard';
import * as ProjectCardStories from '../ProjectCard/ProjectCard.stories';
import { ProjectCardBasic } from '../ProjectCard/ProjectCardBasic';
import * as ProjectCardBasicStories from '../ProjectCard/ProjectCardBasic.stories';
import RepoCard from '../RepoCard';
import * as RepoCardStories from '../RepoCard/RepoCard.stories';
import ServiceItem from '../ServiceItem';
import * as ServiceItemStories from '../ServiceItem/ServiceItem.stories';
import { BasicGrid } from './BasicGrid';

const meta = {
  title: 'Components/BasicGrid',
  component: BasicGrid,
  decorators: [
    (Story) => (
      <div className='max-w-4xl'>
        <Story />
      </div>
    ),
  ],
  args: {
    title: 'Basic Grid',
    items: [
      {
        id: '1',
        title: 'Item 1',
        description: 'Description 1',
      },
      {
        id: '2',
        title: 'Item 2',
        description: 'Description 2',
      },
      {
        id: '3',
        title: 'Item 3',
        description: 'Description 3',
      },
    ],
    render: (item: any) => <div key={item.id}>{item.title}</div>,
  },
} satisfies Meta<typeof BasicGrid>;

export default meta;
type Story = StoryObj<typeof BasicGrid>;

export const Default: Story = {
  args: {},
};

export const Subtitle: Story = {
  args: {
    subtitle: 'Subtitle',
  },
};

export const NoDivider: Story = {
  args: {
    divider: false,
  },
};

export const RenderProjectCard: Story = {
  args: {
    subtitle: 'Project Card',
    items: [
      { ...ProjectCardStories.default.args?.item },
      { ...ProjectCardStories.default.args?.item },
      { ...ProjectCardStories.default.args?.item },
    ],
    render: (project, idx) => <ProjectCard item={project} key={idx} />,
  },
};

export const RenderProjectCardBasic: Story = {
  args: {
    subtitle: 'Project Card Basic',
    items: [
      { ...ProjectCardBasicStories.default.args?.item },
      { ...ProjectCardBasicStories.default.args?.item },
      { ...ProjectCardBasicStories.default.args?.item },
    ],
    render: (project, idx) => <ProjectCardBasic item={project} key={idx} />,
  },
};

export const RenderRepoCard: Story = {
  args: {
    subtitle: 'Repo Card',
    items: [
      { ...RepoCardStories.default.args?.item },
      { ...RepoCardStories.default.args?.item },
      { ...RepoCardStories.default.args?.item },
    ],
    render: (repo, idx) => <RepoCard item={repo} key={idx} />,
  },
};

export const RenderServiceItem: Story = {
  args: {
    subtitle: 'Service Item',
    items: [
      { ...ServiceItemStories.default.args?.item },
      { ...ServiceItemStories.default.args?.item },
      { ...ServiceItemStories.default.args?.item },
    ],
    render: (service, idx) => <ServiceItem item={service} key={idx} />,
  },
};
