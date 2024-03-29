import Container from "@/components/Container";
import React from "react";
import classNames from "classnames";
import Image from "next/image";
import ProjectLink from "@/components/ProjectLink";
import { projects } from "@root/content/data/projects";
import { PostBody } from "@/components/PostBody";

export const metadata = {
  title: "Projects of John Kevin Losito",
  description: "Here you find some of the projects I've worked on.",
  openGraph: {
    title: "Projects of John Kevin Losito",
    description: "Here you find some of the projects I've worked on.",
    images: [
      {
        url: "/assets/projects-og.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects of John Kevin Losito",
    description: "Here you find some of the projects I've worked on.",
    images: [
      {
        url: "/assets/projects-og.png",
      },
    ],
  },
};

const ProjectsPage = () => {
  return (
    <Container>
      <h1 className="gradient-text font-bold text-3xl md:text-5xl lg:text-6xl pb-8 mt-8">
        Projects
      </h1>
      {projects.map((project, index) => {
        const isEven = index % 2 === 0;
        return (
          <article key={project.title} className="mb-16">
            <div
              className={classNames("flex flex-col gap-4", {
                "md:flex-row": isEven,
                "md:flex-row-reverse": !isEven,
              })}
            >
              <div className="flex h-full flex-col md:w-2/3">
                <h2 className="text-xl font-bold md:text-2xl lg:text-3xl mb-2">
                  {project.title}
                </h2>
                <PostBody content={project.description} />
                <p className="max-w-xs">
                  <strong>Tech used: </strong>
                  {project.skills.join(", ")}
                </p>
                <div className="flex flex-wrap items-start py-3 gap-2">
                  {project.site && (
                    <ProjectLink link={project.site} type="external" />
                  )}
                  {project.repo && (
                    <ProjectLink link={project.repo} type="repo" />
                  )}
                  {project.post && (
                    <ProjectLink link={project.post} type="internal" />
                  )}
                </div>
              </div>
              <div className="w-full md:max-w-lg overflow-hidden">
                <div className="relative inline-block w-full h-64 md:h-full min-h-[296px]">
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill={true}
                    loading="lazy"
                    className="object-contain w-full transition-all hover:scale-110"
                  />
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </Container>
  );
};

export default ProjectsPage;
