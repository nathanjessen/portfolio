import { NextPage } from 'next/types';
import Experience from '../../components/Experience';
import { Container } from '../../components/Layouts/Container';
import PageHeading from '../../components/PageHeading';

export const metadata = {
  title: 'Experience',
};

const ExperiencePage: NextPage = () => {
  return (
    <>
      <PageHeading>Experience</PageHeading>
      <Container>
        <Experience />
      </Container>
    </>
  );
};

export default ExperiencePage;
