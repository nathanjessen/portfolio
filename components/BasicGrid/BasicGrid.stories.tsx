import type { Meta, StoryObj } from '@storybook/nextjs';
import ProjectCard from '../ProjectCard';
import * as ProjectCardStories from '../ProjectCard/ProjectCard.stories';
import { BasicGrid } from './BasicGrid';
import { Project } from '../../constants/projects';

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
