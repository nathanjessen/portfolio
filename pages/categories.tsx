import DefaultLayout from "../components/Layouts/DefaultLayout";
import Categories from "../components/Categories";
import PageHeading from "../components/PageHeading";

export default function categories() {
  return (
    <DefaultLayout title="Categories | Nathan Jessen">
      <PageHeading>Categories</PageHeading>
      <Categories categories={[]} />
    </DefaultLayout>
  );
}
