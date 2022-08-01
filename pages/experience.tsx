import { NextPage } from "next/types";
import DefaultLayout from "../components/Layouts/DefaultLayout";
import Experience from "../components/Experience";
import PageHeading from "../components/PageHeading";

const ExperiencePage: NextPage = () => {
  return (
    <DefaultLayout title="Experience | Nathan Jessen">
      <PageHeading>Experience</PageHeading>
      <Experience />
    </DefaultLayout>
  );
};

export default ExperiencePage;
