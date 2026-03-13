import { Metadata } from 'next';
import AboutMe from '../../components/AboutMe';
import { Container } from '../../components/Layouts/Container';
import PageHeading from '../../components/PageHeading';

export const metadata: Metadata = {
  title: 'About Me',
  description:
    'Learn more about Nathan Jessen, a Senior Software Engineer specializing in AI-native developer tools, React, TypeScript, and component systems.',
  openGraph: {
    title: 'About Me | Nathan Jessen',
    description:
      'Learn more about Nathan Jessen, a Senior Software Engineer specializing in AI-native developer tools, React, TypeScript, and component systems.',
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
