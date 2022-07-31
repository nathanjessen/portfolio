import React from "react";
import PageLayout from "../components/Layouts/PageLayout";
import TagList from "../components/TagList";

export default function tags() {
  return (
    <PageLayout title="Tags | Nathan Jessen">
      {/* assign site_tags = site.tags | sort */}
      <TagList />
    </PageLayout>
  );
}
