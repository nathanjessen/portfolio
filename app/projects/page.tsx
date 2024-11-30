'use client';

import { useMemo } from 'react';
import BasicGrid from '../../components/BasicGrid';
import { Container } from '../../components/Layouts/Container';
import PageHeading from '../../components/PageHeading';
import ProjectCard from '../../components/ProjectCard';
import { ProjectCardBasic } from '../../components/ProjectCard/ProjectCardBasic';
import { projects } from '../../constants/projects';

const ProjectsPage = () => {
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
        showFilters={false}
      />

      <BasicGrid
        title='Archive'
        subtitle='Past Projects'
        divider={false}
        items={archivedItems}
        render={(item, idx) => <ProjectCardBasic item={item} key={idx} />}
        showFilters={true}
      />
    </>
  );
};

export default ProjectsPage;
