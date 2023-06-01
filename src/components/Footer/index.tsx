import React from "react";
import { AiOutlineLinkedin, AiOutlineDribbble } from "react-icons/ai";
import { VscGithubAlt } from "react-icons/vsc";
import SocialIcons from "../SocialIcons";
import Link from "next/link";
function Footer() {
  return (
    <footer className="px-3 py-8 transition-colors duration-200">
      <div className="flex flex-col">
        <div className="h-px mx-auto rounded-full md:hidden mt-7 w-11"></div>
        <div className="flex flex-col mt-4 md:mt-0 md:flex-row">
          <nav className="flex flex-col items-center justify-center flex-1 border-gray-100 md:items-end md:border-r md:pr-5">
            <Link
              aria-current="page"
              href="/page/about"
              className="hover:text-gray-700 dark:hover:text-white"
            >
              About this site
            </Link>
          </nav>
          <div className="h-px mx-auto mt-4 rounded-full md:hidden w-11"></div>
          <div className="flex items-center justify-center flex-1 mt-4 border-gray-100 md:mt-0 md:border-r">
            <SocialIcons />
          </div>
          <div className="h-px mx-auto mt-4 rounded-full md:hidden w-11 "></div>
          <div className="flex flex-col items-center justify-center flex-1 mt-7 md:mt-0 md:items-start md:pl-5">
            <span className="">© 2023</span>
            <span className="mt-7 md:mt-1">
              Created by
              <a
                target="_blank"
                rel="no-referer"
                className="underline hover:text-primary-gray-20 ml-1"
                href="https://devvitt-site.vercel.app/"
              >
                Devvitt
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
