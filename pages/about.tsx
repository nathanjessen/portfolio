import { NextPage } from 'next/types';
import AboutMe from '../components/AboutMe';
import { Container } from '../components/Layouts/Container';
import { DefaultLayout } from '../components/Layouts/DefaultLayout';
import PageHeading from '../components/PageHeading';

const AboutPage: NextPage = () => {
  return (
    <DefaultLayout title='About Me | Nathan Jessen'>
      <PageHeading>About Me</PageHeading>

      <Container>
        <AboutMe />
      </Container>
    </DefaultLayout>
  );
};

export default AboutPage;
