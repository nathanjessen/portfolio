import React from "react";
import PageLayout from "../components/Layouts/PageLayout";
import PostList from "../components/PostList";

export default function experience() {
  return (
    <PageLayout title="Blog | Nathan Jessen">
      {/* assign post_list = site.posts */}
      <PostList posts={posts} />
    </PageLayout>
  );
}
