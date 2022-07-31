import React from "react";
import ContainerBlock from "../components/Layouts/ContainerBlock";
import TagList from "../components/TagList";

export default function tags() {
  return (
    <ContainerBlock title="Tags | Nathan Jessen">
      {/* assign site_tags = site.tags | sort */}
      <TagList />
    </ContainerBlock>
  );
}
