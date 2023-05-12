import ListOfPost from "@/components/ListPost";
import Pagination from "@/components/Pagination";
import PostCard from "@/components/PostCard";
import { getAllTags, getTagPosts } from "@/services/api.service";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
export async function generateStaticParams() {
  const tags = await getAllTags();
  return tags.map((tag) => ({
    slug: tag.slug,
  }));
}
async function Page({ params }: { params: { slug: string } }) {
  const postList = await getTagPosts(params.slug);
  const numPost = postList.meta.pagination.total;
  const BreadCrumbs = () => {
    return (
      <div className="text-sm gap-1 breadcrumbs btn-group no-animation mb-10">
        <ul>
          <li className="btn btn-ghost">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="uppercase flex flex-row gap-1">
            {params.slug}
            <span className="badge badge-accent">{numPost}</span>
          </li>
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

export default Page;
