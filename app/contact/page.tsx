import { Metadata } from 'next';
import Contact from '../../components/Contact';
import PageHeading from '../../components/PageHeading';
import { Container } from '../../components/Layouts/Container';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Nathan Jessen. Whether you have a project in mind or just want to connect, I would love to hear from you.',
  openGraph: {
    title: 'Contact | Nathan Jessen',
    description:
      'Get in touch with Nathan Jessen. Whether you have a project in mind or just want to connect, I would love to hear from you.',
  },
};
export default function ContactPage() {
  return (
    <>
      <PageHeading>Contact</PageHeading>
      <Container>
        <Contact />
      </Container>
    </>
  );
}
