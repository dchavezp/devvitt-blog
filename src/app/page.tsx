import Categories from "@/components/Categories";
import { getAllTags, getPosts, getSearchPosts } from "../services/api.service";
import ListOfPost from "@/components/ListPost";
import Pagination from "@/components/Pagination";
import * as fs from "node:fs";

export default async function Home() {
  const postList = await getPosts();
  const tags = await getAllTags();
  const AllPostForSerach = await getSearchPosts();

  // Enable getSearch

  try {
    const jsonString = JSON.stringify(AllPostForSerach);

    fs.writeFile("search.json", jsonString, "utf8", (err) => {
      if (err) {
        console.log("Error writing file", err);
      } else {
        console.log("Successfully wrote file");
      }
    });
  } catch (error) {
    console.log("error : ", error);
  }
  return (
    <>
      <Categories tags={tags} />
      <ListOfPost postList={postList} />
      <Pagination pagination={postList.meta.pagination} currentPath="/" />
    </>
  );
}
