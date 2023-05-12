import ListOfPost from "@/components/ListPost";
import Pagination from "@/components/Pagination";
import { getPaginationTagPosts } from "@/services/api.service";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

async function PageTagPosts({
  params,
}: {
  params: { slug: string; item: string };
}) {
  let item: number = Number.parseInt(params.item);
  const postList = await getPaginationTagPosts(item, params.slug);
  const BreadCrumbs = () => {
    return (
      <div className="text-sm gap-1 breadcrumbs btn-group no-animation mb-10">
        <ul>
          <li className="btn btn-ghost">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="uppercase flex flex-row gap-1">{params.slug}</li>
        </ul>
      </div>
    );
  };
  if (postList?.length === 0) {
    notFound();
  }
  return (
    <>
      <BreadCrumbs />
      <ListOfPost postList={postList} />
      <Pagination
        pagination={postList.meta.pagination}
        currentPath={`/slug/${params.slug}/`}
      />
    </>
  );
}

export default PageTagPosts;
