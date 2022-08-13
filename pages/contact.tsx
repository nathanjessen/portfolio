import { NextPage } from 'next/types';
import Contact from '../components/Contact';
import { Container } from '../components/Layouts/Container';
import { DefaultLayout } from '../components/Layouts/DefaultLayout';
import PageHeading from '../components/PageHeading';

const ContactPage: NextPage = () => {
  return (
    <DefaultLayout title='Contact Me | Nathan Jessen'>
      <PageHeading>Contact Me</PageHeading>

      <Container>
        <Contact />
      </Container>
    </DefaultLayout>
  );
};

export default ContactPage;
