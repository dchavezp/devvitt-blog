import Categories from "@/components/Categories";
import ListOfPost from "@/components/ListPost";
import Pagination from "@/components/Pagination";
import {
  getAllTags,
  getNavigation,
  getPaginationPosts,
  getPosts,
} from "@/services/api.service";

import { notFound } from "next/navigation";
import React from "react";

export async function generateMetadata() {
  const metaData = await getNavigation();

  // error handling

  if (metaData) {
    return {
      title: metaData.title,
      description: metaData.description,
      openGraph: {
        title: metaData.title,
        description: metaData?.description,
        url: metaData.url,
      },
    };
  }
}
export async function generateStaticParams() {
  const posts = await getPosts();

  let paginationItem: { item: string }[] = [];

  for (let index = 1; index <= posts?.meta.pagination.pages; index++) {
    paginationItem.push({
      item: `${index}`,
    });
  }

  return paginationItem;
}

async function PaginationPage({ params }: { params: { item: string } }) {
  const tags = await getAllTags();
  let getParams: number = Number.parseInt(params.item);
  const postList = await getPaginationPosts(getParams);
  if (postList?.length === 0) {
    notFound();
  }
  return (
    <>
      <Categories tags={tags} />
      <ListOfPost postList={postList} />
      <Pagination pagination={postList.meta.pagination} currentPath="/" />
    </>
  );
}

export default PaginationPage;
