import DefaultLayout from "../components/Layouts/DefaultLayout";
import Contact from "../components/Contact";
import PageHeading from "../components/PageHeading";
import Container from "../components/Layouts/Container";

export default function contact() {
  return (
    <DefaultLayout title="Contact Me | Nathan Jessen">
      <PageHeading>Contact Me</PageHeading>

      <Container>
        <Contact />
      </Container>
    </DefaultLayout>
  );
}
