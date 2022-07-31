import DefaultLayout from "../components/Layouts/DefaultLayout";
import Contact from "../components/Contact";
import PageHeading from "../components/PageHeading";

export default function contact() {
  return (
    <DefaultLayout title="Contact Me | Nathan Jessen">
      <PageHeading>Contact Me</PageHeading>
      <Contact />
    </DefaultLayout>
  );
}
