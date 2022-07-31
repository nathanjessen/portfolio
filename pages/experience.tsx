import DefaultLayout from "../components/Layouts/DefaultLayout";
import Experience from "../components/Experience";
import PageHeading from "../components/PageHeading";

export default function experience() {
  return (
    <DefaultLayout title="Experience | Nathan Jessen">
      <PageHeading>Experience</PageHeading>
      <Experience />
    </DefaultLayout>
  );
}
