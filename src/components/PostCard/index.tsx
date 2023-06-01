import { PostOrPage } from "@tryghost/content-api";
import React from "react";
import Image from "next/image";
import { format } from "date-fns";
import Link from "next/link";
import { BiBookOpen } from "react-icons/bi";
function PostCard({ post }: { post: PostOrPage }) {
  return (
    <article
      className="flex flex-col  lg:flex-row gap-5 lg:items-center  bg-base-200 px-8 py-8 rounded-2xl"
      key={post.id}
    >
      <div className="lg:max-w-2xl">
        <h2 className="card-title text-2xl uppercase items-start">
          {post.title}
        </h2>
        <p className="flex flex-row items-center flex-wrap gap-2 mt-2">
          <span className="flex flex-row gap-1 flex-wrap">
            {post.tags?.map((tag) => (
              <span className="badge badge-gray badge-outline" key={tag.id}>
                {tag.name}
              </span>
            ))}
          </span>
        </p>
        <p className="text-xs flex flex-row items-center gap-3 my-1 mt-4">
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
          <span className="flex flex-row items-center gap-2">
            <BiBookOpen size={16} />
            {post.reading_time} min read
          </span>
        </p>
        <p className="mt-2 text-neutral-500 ">{post.meta_description}</p>
        <Link
          href={`/post/${post.slug}`}
          className="btn btn-outline btn-sm mt-6"
        >
          Read Article
        </Link>
      </div>
      <Link href={`/post/${post.slug}`}>
        <figure>
          <Image
            src={post.feature_image as string}
            width={400}
            height={400}
            alt={post.title as string}
            className="object-cover max-h-[240px] w-full lg:aspect-video rounded-xl"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </figure>
      </Link>
    </article>
  );
}

export default PostCard;
