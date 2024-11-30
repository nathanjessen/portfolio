import { Metadata } from 'next';
import AboutMe from '../../components/AboutMe';
import { Container } from '../../components/Layouts/Container';
import PageHeading from '../../components/PageHeading';

export const metadata: Metadata = {
  title: 'About Me',
  description: 'Learn more about Nathan Jessen, a Senior Frontend Developer with expertise in React, TypeScript, and modern web technologies.',
  openGraph: {
    title: 'About Me | Nathan Jessen',
    description: 'Learn more about Nathan Jessen, a Senior Frontend Developer with expertise in React, TypeScript, and modern web technologies.',
  },
};

const AboutPage = () => {
  return (
    <>
      <PageHeading>About Me</PageHeading>
      <Container>
        <AboutMe />
      </Container>
    </>
  );
};

export default AboutPage;
