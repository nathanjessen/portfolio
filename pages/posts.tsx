import { NextPage } from "next/types";
import DefaultLayout from "../components/Layouts/DefaultLayout";
import PageHeading from "../components/PageHeading";
import PostList from "../components/PostList";

const PostsPage: NextPage = () => {
  return (
    <DefaultLayout title="Blog | Nathan Jessen">
      <PageHeading>Posts</PageHeading>
      <PostList posts={[]} />
    </DefaultLayout>
  );
}

export default PostsPage;
