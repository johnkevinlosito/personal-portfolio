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
        <div className="mt-12 space-y-6">
          <ExperienceSection jobs={jobs} />
        </div>
      </Container>
    </div>
  );
};

export default AboutPage;
