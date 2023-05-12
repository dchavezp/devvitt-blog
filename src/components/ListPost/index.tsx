import { PostsOrPages } from "@tryghost/content-api";
import React from "react";
import PostCard from "../PostCard";

function ListOfPost({ postList }: { postList: PostsOrPages }) {
  return (
    <div className="flex flex-row justify-center flex-wrap gap-6">
      {postList.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

export default ListOfPost;
