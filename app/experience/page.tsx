import { Metadata } from 'next';
import { Container } from '../../components/Layouts/Container';
import PageHeading from '../../components/PageHeading';
import Timeline from '../../components/Timeline';

export const metadata: Metadata = {
  title: 'Experience',
  description: 'Professional experience and career timeline of Nathan Jessen, showcasing roles in frontend development and web technologies.',
  openGraph: {
    title: 'Experience | Nathan Jessen',
    description: 'Professional experience and career timeline of Nathan Jessen, showcasing roles in frontend development and web technologies.',
  },
};

const ExperiencePage = () => {
  return (
    <>
      <PageHeading>Experience</PageHeading>
      <Container>
        <Timeline />
      </Container>
    </>
  );
};

export default ExperiencePage;
