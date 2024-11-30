import { Metadata } from 'next';
import ContactForm from '../../components/ContactForm';
import { Container } from '../../components/Layouts/Container';
import PageHeading from '../../components/PageHeading';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Nathan Jessen. Whether you have a project in mind or just want to connect, I'd love to hear from you.',
  openGraph: {
    title: 'Contact | Nathan Jessen',
    description: 'Get in touch with Nathan Jessen. Whether you have a project in mind or just want to connect, I'd love to hear from you.',
  },
};

const ContactPage = () => {
  return (
    <>
      <PageHeading>Contact</PageHeading>
      <Container>
        <ContactForm />
      </Container>
    </>
  );
};

export default ContactPage;
