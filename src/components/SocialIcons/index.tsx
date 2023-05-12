import React from "react";
import { AiOutlineDribbble, AiOutlineLinkedin } from "react-icons/ai";
import { VscGithubAlt } from "react-icons/vsc";

function SocialIcons() {
  return (
    <div className="flex flex-row gap-2">
      <a
        aria-label="Linkedin Profile"
        className="underline decoration-1 btn btn-ghost btn-circle btn-sm"
        href="https://www.linkedin.com/in/dschavez/"
        target="_blank"
        rel="no-referer"
      >
        <AiOutlineLinkedin size={16} />
      </a>
      <a
        aria-label="Github profile"
        className="underline decoration-1 btn btn-ghost btn-circle btn-sm"
        href="https://github.com/dchavezp"
        target="_blank"
        rel="no-referer"
      >
        <VscGithubAlt size={16} />
      </a>
      <a
        aria-label="Dribbble Profile"
        className="underline decoration-1 btn btn-ghost btn-circle btn-sm"
        href="https://dribbble.com/dschavez"
        target="_blank"
        rel="no-referer"
      >
        <AiOutlineDribbble size={16} />
      </a>
    </div>
  );
}

export default SocialIcons;
