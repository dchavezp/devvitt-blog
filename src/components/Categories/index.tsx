import { Tags } from "@tryghost/content-api";
import React from "react";
import Tag from "../Tag";

function Categories({ tags }: { tags: Tags }) {
  return (
    <nav>
      <ul className="flex flex-row flex-wrap lg:flex-nowrap justify-center gap-6 mb-20">
        {tags.map((tag) => (
          <Tag key={tag.id} name={tag.name as string} slug={tag.slug} />
        ))}
      </ul>
    </nav>
  );
}

export default Categories;
