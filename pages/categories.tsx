import React from "react";
import PageLayout from "../components/Layouts/PageLayout";
import Categories from "../components/Categories";

export default function categories() {
  return (
    <PageLayout title="Categories | Nathan Jessen">
      <Categories categories={categories} />
    </PageLayout>
  );
}
