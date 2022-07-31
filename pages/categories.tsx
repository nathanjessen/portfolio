import React from "react";
import ContainerBlock from "../components/Layouts/ContainerBlock";
import Categories from "../components/Categories";

// assign site_categories = site.categories | sort

export default function categories() {
  return (
    <ContainerBlock title="Categories | Nathan Jessen">
      <Categories />
    </ContainerBlock>
  );
}
