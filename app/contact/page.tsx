import { Metadata } from 'next';
import Contact from '../../components/Contact';
import PageHeading from '../../components/PageHeading';
import { Container } from '../../components/Layouts/Container';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Nathan Jessen via email, LinkedIn, or GitHub.',
  openGraph: {
    title: 'Contact | Nathan Jessen',
    description:
      'Get in touch with Nathan Jessen via email, LinkedIn, or GitHub.',
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
