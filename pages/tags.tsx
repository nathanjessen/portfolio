import DefaultLayout from "../components/Layouts/DefaultLayout";
import Tags from "../components/Tags";

export default function tags() {
  return (
    <DefaultLayout title="Tags | Nathan Jessen">
      {/* assign site_tags = site.tags | sort */}
      <Tags tags={[]} />
    </DefaultLayout>
  );
}
