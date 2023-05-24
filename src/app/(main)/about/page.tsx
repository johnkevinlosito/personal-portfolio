import CertificationSection from "@/components/CertificationSection";
import Container from "@/components/Container";
import EducationSection from "@/components/EducationSection";
import ExperienceSection from "@/components/ExperienceSection";
import { sanityClient } from "@/lib/sanity";
import { certificationQuery } from "@/sanity/queries/certification";
import { educationQuery } from "@/sanity/queries/education";
import { jobsQuery } from "@/sanity/queries/jobs";
import Certification from "@/sanity/types/certification";
import Education from "@/sanity/types/education";
import Job from "@/sanity/types/job";
import React from "react";

export const metadata = {
  title:
    "About John Kevin Losito, a Front-end Engineer, and a lifelong learner based in PH",
  description:
    "A passionate developer, naturally curious, and always seeking new knowledge",
  openGraph: {
    title:
      "About John Kevin Losito, a Front-end Engineer, and a lifelong learner based in PH",
    description:
      "A passionate developer, naturally curious, and always seeking new knowledge",
    images: [
      {
        url: "/assets/about-og.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "About John Kevin Losito, a Front-end Engineer, and a lifelong learner based in PH",
    description:
      "A passionate developer, naturally curious, and always seeking new knowledge",
    images: [
      {
        url: "/assets/about-og.png",
      },
    ],
  },
};

const getData = async () => {
  const jobs: Job[] = await sanityClient.fetch(jobsQuery);
  const education: Education[] = await sanityClient.fetch(educationQuery);
  const certification: Certification[] = await sanityClient.fetch(
    certificationQuery
  );

  return {
    jobs,
    education,
    certification,
  };
};

const AboutPage = async () => {
  const { jobs, education, certification } = await getData();

  return (
    <div>
      <Container>
        <h1 className="gradient-text font-bold text-3xl md:text-5xl lg:text-6xl mt-8">
          Hey, I&apos;m John Kevin 👋
        </h1>
        <h2 className="font-bold text-xl md:text-2xl mt-2">
          Front-end Engineer from PH 🇵🇭
        </h2>
        <p className="my-8 text-lg">
          I&apos;m a passionate developer, currently focused on the frontend. I
          am naturally curious, always seeking new knowledge, and actively
          developing new skills.
        </p>
        <p className="my-4 text-lg">
          The technologies I work with are JavaScript, HTML and CSS with a focus
          on the frameworks React.js, Next.js, and TailwindCSS. I&apos;ve also
          worked with backend technologies such as PHP, Laravel, and MySQL.
        </p>
        <p className="my-4 text-lg">
          When I&apos;m not coding or taking a break, you&apos;ll often see me
          casually playing video games, and binge-watching movies, TV series,
          and anime.
        </p>
        <div className="mt-12 space-y-6">
          <ExperienceSection jobs={jobs} />
        </div>
        <div className="mt-12 space-y-6">
          <EducationSection education={education} />
        </div>
        <div className="mt-12 space-y-6">
          <CertificationSection certification={certification} />
        </div>
      </Container>
    </div>
  );
};

export default AboutPage;
