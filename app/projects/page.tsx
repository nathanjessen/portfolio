import { Metadata } from 'next';
import { Container } from '../../components/Layouts/Container';
import PageHeading from '../../components/PageHeading';
import Projects from '../../components/Projects';
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
  return (
    <>
      <PageHeading>Projects</PageHeading>
      <Container>
        <Projects />
      </Container>
    </>
  );
};

export default ProjectsPage;
