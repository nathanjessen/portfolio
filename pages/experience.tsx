import { NextPage } from 'next/types';
import Experience from '../components/Experience';
import { Container } from '../components/Layouts/Container';
import { DefaultLayout } from '../components/Layouts/DefaultLayout';
import PageHeading from '../components/PageHeading';

const ExperiencePage: NextPage = () => {
  return (
    <DefaultLayout title='Experience | Nathan Jessen'>
      <PageHeading>Experience</PageHeading>
      <Container>
        <Experience />
      </Container>
    </DefaultLayout>
  );
};

export default ExperiencePage;
