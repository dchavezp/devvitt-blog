"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { Pagination } from "@tryghost/content-api";
import { usePaginationRange, DOTS } from "@/hooks/usePaginationRange";

function Pagination({
  pagination,
  currentPath,
}: {
  pagination: Pagination;
  currentPath: string;
}) {
  const router = useRouter();
  const totalPost = pagination.total ?? 0;
  const paginationRange = usePaginationRange({
    currentPage: pagination.page,
    totalCount: pagination.total,
    siblingCount: 1,
    pageSize: 10,
  });

  const PagesRange = ({ range }: { range: (string | number)[] }) => {
    return (
      <>
        {range.map((page, index) => {
          if (page === DOTS && typeof page === "string") {
            return (
              <button key={`dots-${index}`} className="btn btn-disabled">
                &#8230;
              </button>
            );
          }
          return (
            <button
              key={`page-${index}`}
              className={`btn ${page === pagination.page ? "btn-active" : ""}`}
              onClick={() => {
                router.push(`${currentPath}pagination/${page}`);
              }}
            >
              {page}
            </button>
          );
        })}
      </>
    );
  };
  const previousPage = () => {
    if (pagination.prev) {
      if (pagination.prev === 1) {
        router.push(currentPath);
      } else {
        router.push(`${currentPath}pagination/${pagination.prev}`);
      }
    }
  };
  const nextPage = () => {
    if (pagination.next) {
      router.push(`${currentPath}pagination/${pagination.next}`);
    }
  };
  if (totalPost > 10) {
    return (
      <div className="flex justify-center btn-group mt-10">
        <button
          className="btn"
          aria-label="Previous Page"
          onClick={previousPage}
        >
          <RiArrowLeftSLine />
        </button>
        <PagesRange range={paginationRange} />
        <button className="btn" aria-label="Next Page" onClick={nextPage}>
          <RiArrowRightSLine />
        </button>
      </div>
    );
  } else {
    return null;
  }
}

export default Pagination;
