import { useMemo } from 'react';
import { Project } from '../../constants/UserProps';
import { ProjectListItem } from './ProjectListItem';

export interface ProjectListProps {
  projects: Project[];
}

export const ProjectList = ({ projects }: ProjectListProps) => {
  const publishedProjects = useMemo(() => projects.filter(project => project.published !== false), [projects]);

  return (
    <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
      {publishedProjects.map((project, idx) => (
        <ProjectListItem item={project} key={idx} />
      ))}
    </ul>
  );
};
