import DefaultLayout from "../components/Layouts/DefaultLayout";
import PageHeading from "../components/PageHeading";
import PostList from "../components/PostList";

export default function experience() {
  return (
    <DefaultLayout title="Blog | Nathan Jessen">
      <PageHeading>Posts</PageHeading>
      {/* assign post_list = site.posts */}
      <PostList posts={[]} />
    </DefaultLayout>
  );
}
