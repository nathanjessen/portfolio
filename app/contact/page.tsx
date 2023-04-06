import { NextPage } from 'next/types';
import Contact from '../../components/Contact';
import { Container } from '../../components/Layouts/Container';
import PageHeading from '../../components/PageHeading';

export const metadata = {
  title: 'Contact Me | Nathan Jessen',
};

const ContactPage: NextPage = () => {
  return (
    <>
      <PageHeading>Contact Me</PageHeading>

      <Container>
        <Contact />
      </Container>
    </>
  );
};

export default ContactPage;
