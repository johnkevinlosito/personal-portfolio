import HeroSection from "@/components/HeroSection";
import LatestPosts from "@/components/LatestPosts";
import SkillsSection from "@/components/SkillsSection";
import { sanityClient } from "@/lib/sanity";
import { postsQuery } from "@/sanity/queries/posts";
import Post from "@/sanity/types/post";
import React from "react";

export const metadata = {
  title: "Front-end Engineer John Kevin Losito",
  description: "A Front-End Engineer with a focus on JavaScript and React.",
  keywords: [
    "Front-end Engineer",
    "John Kevin Losito",
    "Front-End",
    "Full-Stack",
    "React",
    "TypeScript",
    "JavaScript",
    "CSS",
    "Tailwind",
    "AWS Certified",
    "DevOps",
    "Cloud",
  ],
  openGraph: {
    title: "Front-end Engineer John Kevin Losito",
    description: "A Front-End Engineer with a focus on JavaScript and React.",
    images: [
      {
        url: "/assets/about-og.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Front-end Engineer John Kevin Losito",
    description: "A Front-End Engineer with a focus on JavaScript and React.",
    images: [
      {
        url: "/assets/about-og.png",
      },
    ],
  },
};

const getData = async () => {
  const posts: Post[] = await sanityClient.fetch(postsQuery(undefined, true));

  return posts;
};
const HomePage = async () => {
  const posts = await getData();
  return (
    <div>
      <HeroSection />
      <SkillsSection />
      <LatestPosts posts={posts} />
    </div>
  );
};

export default HomePage;
