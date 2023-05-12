"use client";
import { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import Modal from "../Modal";
import { PostOrPage } from "@tryghost/content-api";
import searchData from "@/root/search.json";
import Link from "next/link";
let searchPost: PostOrPage[] = [];
function Search() {
  const [query, setQuery] = useState<string>("");
  const [modal, setActiveModal] = useState<boolean>(false);
  const showModal = () => {
    setActiveModal(true);
  };
  const hideModal = () => {
    setActiveModal(false);
    setQuery("");
    searchPost = [];
  };
  useEffect(() => {
    if (query.trim().length > 0) {
      searchPost.length = 0;
      searchData.map((item: any) => {
        const data = item as PostOrPage;
        if (
          data.title
            ?.trim()
            .toLowerCase()
            .includes(query?.trim().toLowerCase()) &&
          !searchPost.some((post) => post.id === data.id)
        ) {
          searchPost.push(item);
        }
      });
    } else {
      searchPost.length = 0;
    }
  }, [query]);
  return (
    <>
      <button
        className="btn btn-circle btn-ghost btn-sm"
        aria-label="Search Post"
        onClick={showModal}
      >
        <BsSearch />
      </button>
      <Modal active={modal} setActive={hideModal}>
        <div className="w-full lg:w-[600px] 2xl:w-[800px]">
          <div className="form-control w-full flex flex-row gap-2">
            <div className="input-group w-full input-group-md">
              <input
                value={query}
                onChange={(e) => {
                  e.preventDefault();
                  setQuery(e.target.value);
                }}
                placeholder="Search a post"
                className="input w-full input-md input-bordered outline-none appearance-none focus:border-primary transition-all duration-200 focus:outline-none"
              />
              <span className="input input-md input-bordered">
                <BsSearch />
              </span>
            </div>
            <button className="btn" onClick={hideModal}>
              Cancel Search
            </button>
          </div>
          <div className="flex flex-col gap-2 h-[300px] overflow-y-auto mt-6">
            {searchPost.length > 0
              ? searchPost.map((post) => (
                  <Link
                    className="alert alert-neutral cursor-pointer"
                    href={`/post/${post.slug}`}
                    key={post.id}
                    onClick={hideModal}
                  >
                    {post.title}
                  </Link>
                ))
              : null}
          </div>
        </div>
      </Modal>
    </>
  );
}

export default Search;
