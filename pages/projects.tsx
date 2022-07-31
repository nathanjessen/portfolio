import { useMemo } from "react";
import PageLayout from "../components/Layouts/PageLayout";
import ProjectList from "../components/ProjectList";
import { projects } from "../constants/projects";

export default function Projects() {
  const featuredItems = useMemo(() => projects.filter(project => project.featured), []);
  const archivedItems = useMemo(() => projects.filter(project => project.archived), []);

  return (
    <PageLayout title="Projects | Nathan Jessen">
      <div className="py-12">
        <h2 className="text-xl md:text-2xl font-medium text-primary">
          Projects
        </h2>
        <p className="text-3xl leading-tight tracking-wider uppercase text-white font-extrabold mt-2">
          Recent Work
        </p>

        <div className="mt-12">
          <ProjectList projects={featuredItems} />
        </div>
      </div>

      <div className="py-12">
        <h2 className="text-xl md:text-2xl font-medium text-primary">
          Archive
        </h2>
        <p className="text-3xl leading-tight tracking-wider uppercase text-white font-extrabold mt-2">
          Past Projects
        </p>

        <div className="mt-12">
          <ProjectList projects={archivedItems} />
        </div>
      </div>
    </PageLayout>
  );
}
