import { PostOrPage } from "@tryghost/content-api";
import React from "react";
import Image from "next/image";
import { format } from "date-fns";
import Link from "next/link";

function PostCard({ post }: { post: PostOrPage }) {
  return (
    <div
      className="card card-side max-w-xl h-[280px] bg-base-content text-neutral-focus shadow-xl"
      key={post.id}
    >
      <figure>
        <Image
          src={post.feature_image as string}
          width={400}
          height={400}
          alt={post.title as string}
          className="object-cover h-full w-full"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title uppercase items-start line-clamp-2 hover:line-clamp-3">
          {post.title}
        </h2>
        <p className="flex flex-row items-center flex-wrap gap-2">
          <span className="flex flex-row gap-1 flex-wrap">
            {post.tags?.map((tag) => (
              <span className="badge badge-gray badge-outline" key={tag.id}>
                {tag.name}
              </span>
            ))}
          </span>
        </p>
        <p className="text-xs flex flex-row items-center gap-1 my-1">
          <span className="">
            {post.authors?.map((author) => (
              <Image
                key={author.id}
                src={author.profile_image as string}
                alt={author.name as string}
                className="avatar rounded-full object-cover w-6 h-6"
                width={24}
                height={24}
              ></Image>
            ))}
          </span>
          <span className="flex flex-col">
            {post.authors?.map((author) => (
              <span key={author.id}>{author.name}</span>
            ))}
            {format(new Date(post.created_at as string), "LLL dd, yyyy")}{" "}
          </span>
        </p>
        <div className="card-actions justify-end">
          <Link
            href={`/post/${post.slug}`}
            className="btn btn-primary btn-sm lg:btn-md"
          >
            Read Article
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
