import React from "react";
import ContainerBlock from "../components/Layouts/ContainerBlock";
import PostList from "../components/PostList";

export default function experience() {
  return (
    <ContainerBlock title="Blog | Nathan Jessen">
      {/* assign post_list = site.posts */}
      <PostList />
    </ContainerBlock>
  );
}
