import { Metadata } from 'next';
import AboutMe from '../../components/AboutMe';
import { Container } from '../../components/Layouts/Container';
import PageHeading from '../../components/PageHeading';

export const metadata: Metadata = {
  title: 'About Me',
  description:
    'Learn more about Nathan Jessen — Senior Software Engineer specializing in AI-native developer tools, React, TypeScript, and component systems. Get in touch via email or LinkedIn.',
  openGraph: {
    title: 'About | Nathan Jessen',
    description:
      'Learn more about Nathan Jessen — Senior Software Engineer specializing in AI-native developer tools, React, TypeScript, and component systems. Get in touch via email or LinkedIn.',
  },
};

const AboutPage = () => {
  return (
    <Container>
      <div className='pt-12'>
        <AboutMe />
      </div>
    </Container>
  );
};

export default AboutPage;
