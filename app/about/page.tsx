import { NextPage } from 'next/types';
import AboutMe from '../../components/AboutMe';
import { Container } from '../../components/Layouts/Container';
import PageHeading from '../../components/PageHeading';

export const metadata = {
  title: 'About Me | Nathan Jessen',
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
