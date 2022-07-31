import DefaultLayout from "../components/Layouts/DefaultLayout";
import CV from "../components/CV";

// assign site_categories = site.categories | sort

export default function idealPosition() {
  return (
    <DefaultLayout title="Ideal Position | Nathan Jessen">
      <CV />
    </DefaultLayout>
  );
}
