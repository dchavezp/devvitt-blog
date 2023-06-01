import { PostsOrPages } from "@tryghost/content-api";
import React from "react";
import PostCard from "../PostCard";

function ListOfPost({ postList }: { postList: PostsOrPages }) {
  return (
    <section className="w-full px-4 flex flex-col gap-10 items-center">
      {postList.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </section>
  );
}

export default ListOfPost;
