import { Metadata } from 'next';
import { useMemo } from 'react';
import BasicGrid from '../../components/BasicGrid';
import PageHeading from '../../components/PageHeading';
import ProjectCard from '../../components/ProjectCard';
import { projects } from '../../constants/projects';
import User from '../../constants/User';

export const metadata: Metadata = {
  title: 'Projects',
  description: `Explore ${User.name}'s portfolio of web development projects, featuring React, TypeScript, and modern web technologies.`,
  openGraph: {
    title: 'Projects | Nathan Jessen',
    description: `Explore ${User.name}'s portfolio of web development projects, featuring React, TypeScript, and modern web technologies.`,
  },
};

const ProjectsPage = () => {
  const featuredItems = useMemo(
    () =>
      projects.filter(
        (project) => project.featured && project.published !== false
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
    </>
  );
};

export default ProjectsPage;
