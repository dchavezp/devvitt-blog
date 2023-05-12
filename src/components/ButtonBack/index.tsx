"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { RiArrowLeftSLine } from "react-icons/ri";
function ButtonBack() {
  const router = useRouter();
  return (
    <button
      className="btn btn-ghost fixed left-40 hidden xl:flex flex-row gap-1 items-center pl-2 pr-3"
      onClick={() => {
        router.back();
      }}
    >
      <RiArrowLeftSLine />
      Back
    </button>
  );
}

export default ButtonBack;
