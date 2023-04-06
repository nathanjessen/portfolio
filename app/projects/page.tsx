import { Metadata, NextPage } from 'next/types';
import { useMemo } from 'react';
import BasicGrid from '../../components/BasicGrid';
import PageHeading from '../../components/PageHeading';
import ProjectCard from '../../components/ProjectCard';
import { ProjectCardBasic } from '../../components/ProjectCard/ProjectCardBasic';
import { projects } from '../../constants/projects';

export const metadata: Metadata = {
  title: 'Projects',
};

const ProjectsPage: NextPage = () => {
  const featuredItems = useMemo(
    () =>
      projects.filter(
        (project) => project.featured && project.published !== false
      ),
    []
  );
  const archivedItems = useMemo(
    () =>
      projects.filter(
        (project) => project.archived && project.published !== false
      ),
    []
  );

  return (
    <>
      <PageHeading>Projects</PageHeading>

      <BasicGrid
        title='Projects'
        subtitle='Recent Work'
        divider={false}
        items={featuredItems}
        render={(item, idx) => <ProjectCard item={item} key={idx} />}
      />

      <BasicGrid
        title='Archive'
        subtitle='Past Projects'
        divider={false}
        items={archivedItems}
        render={(item, idx) => <ProjectCardBasic item={item} key={idx} />}
      />
    </>
  );
};

export default ProjectsPage;
