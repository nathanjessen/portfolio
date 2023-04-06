import { Metadata, NextPage } from 'next/types';
import AboutMe from '../../components/AboutMe';
import { Container } from '../../components/Layouts/Container';
import PageHeading from '../../components/PageHeading';

export const metadata: Metadata = {
  title: 'About Me',
};

const AboutPage: NextPage = () => {
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
