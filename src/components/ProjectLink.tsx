import Link from "next/link";
import React from "react";
import { GoLinkExternal, GoMarkGithub, GoNote } from "react-icons/go";

interface LinkProps {
  link: string;
  type: string;
}
const ProjectLink = ({ link, type }: LinkProps) => {
  switch (type) {
    case "external":
      return (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-1 items-center text-slate-600 bg-slate-200 text-sm py-1 px-2 rounded-md"
        >
          Visit Website
          <GoLinkExternal />
        </a>
      );
    case "internal":
      return (
        <Link
          href={link}
          className="flex gap-1 items-center text-slate-600 bg-slate-200 text-sm py-1 px-2 rounded-md"
        >
          View Post
          <GoNote />
        </Link>
      );

    case "repo":
      return (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-1 items-center text-slate-600 bg-slate-200 text-sm py-1 px-2 rounded-md"
        >
          View Source
          <GoMarkGithub />
        </a>
      );
    default:
      return null;
  }
};

export default ProjectLink;
