import DefaultLayout from "../components/Layouts/DefaultLayout";
import Container from "../components/Layouts/Container";
import PageHeading from "../components/PageHeading";
import AboutMe from "../components/AboutMe";

export default function about() {
  return (
    <DefaultLayout title="About Me | Nathan Jessen">
      <PageHeading>About Me</PageHeading>

      <Container>
        <AboutMe />
      </Container>
    </DefaultLayout>
  );
}
