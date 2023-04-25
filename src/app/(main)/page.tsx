import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
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
};

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <SkillsSection />
    </div>
  );
};

export default HomePage;
