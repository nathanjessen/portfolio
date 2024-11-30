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
import { Project } from '../../constants/projects';
import { Service } from '../../constants/services';

interface BasicItem {
  id: string;
  title: string;
  description: string;
}

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
    ] as BasicItem[],
    render: (item: BasicItem, idx: number) => <div key={idx}>{item.title}</div>,
  },
} satisfies Meta<typeof BasicGrid<BasicItem>>;

export default meta;
type Story = StoryObj<typeof BasicGrid<BasicItem>>;

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

type ProjectStory = StoryObj<typeof BasicGrid<Project>>;

export const RenderProjectCard: ProjectStory = {
  args: {
    subtitle: 'Project Card',
    items: [
      { ...ProjectCardStories.default.args?.item } as Project,
      { ...ProjectCardStories.default.args?.item } as Project,
      { ...ProjectCardStories.default.args?.item } as Project,
    ],
    render: (project: Project, idx: number) => (
      <ProjectCard item={project} key={idx} />
    ),
  },
};

export const RenderProjectCardBasic: ProjectStory = {
  args: {
    subtitle: 'Project Card Basic',
    items: [
      { ...ProjectCardBasicStories.default.args?.item } as Project,
      { ...ProjectCardBasicStories.default.args?.item } as Project,
      { ...ProjectCardBasicStories.default.args?.item } as Project,
    ],
    render: (project: Project, idx: number) => (
      <ProjectCardBasic item={project} key={idx} />
    ),
  },
};

type RepoStory = StoryObj<
  typeof BasicGrid<typeof RepoCardStories.default.args.item>
>;

export const RenderRepoCard: RepoStory = {
  args: {
    subtitle: 'Repo Card',
    items: [
      { ...RepoCardStories.default.args?.item },
      { ...RepoCardStories.default.args?.item },
      { ...RepoCardStories.default.args?.item },
    ],
    render: (repo, idx) => <RepoCard item={repo} key={idx} index={idx} />,
  },
};

type ServiceStory = StoryObj<typeof BasicGrid<Service>>;

export const RenderServiceItem: ServiceStory = {
  args: {
    subtitle: 'Service Item',
    items: [
      { ...ServiceItemStories.default.args?.item } as Service,
      { ...ServiceItemStories.default.args?.item } as Service,
      { ...ServiceItemStories.default.args?.item } as Service,
    ],
    render: (service: Service, idx: number) => (
      <ServiceItem item={service} key={idx} />
    ),
  },
};
