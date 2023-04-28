import Container from "@/components/Container";
import ExperienceSection from "@/components/ExperienceSection";
import { sanityClient } from "@/lib/sanity";
import { jobsQuery } from "@/sanity/queries/jobs";
import Job from "@/sanity/types/job";
import React from "react";

export const metadata = {
  title:
    "About John Kevin Losito, a Front-end Engineer, and a lifelong learner",
  description: "",
};

const getData = async () => {
  const jobs: Job[] = await sanityClient.fetch(jobsQuery);

  return {
    jobs,
  };
};

const AboutPage = async () => {
  const { jobs } = await getData();

  return (
    <div>
      <Container>
        <h1 className="gradient-text font-bold text-3xl md:text-5xl lg:text-6xl mt-8">
          Hey, I'm John Kevin 👋
        </h1>
        <h2 className="font-bold text-xl md:text-2xl mt-2">
          Front-end Engineer from PH 🇵🇭
        </h2>
        <p className="my-8">
          I'm a passionate developer, currently focused on the frontend. I am
          naturally curious, always seeking new knowledge, and actively
          developing new skills.
        </p>
        <p className="my-4">
          The technologies I work with are JavaScript, HTML and CSS with a focus
          on the frameworks React.js, Next.js, and TailwindCSS. I've also worked
          with backend technologies such as PHP, Laravel, and MySQL.
        </p>
        <p className="my-4">
          When I'm not coding or taking a break, you'll often see me casually
          playing video games, and binge-watching movies, TV series, and anime.
        </p>
        <div className="mt-12 space-y-6">
          <ExperienceSection jobs={jobs} />
        </div>
      </Container>
    </div>
  );
};

export default AboutPage;
