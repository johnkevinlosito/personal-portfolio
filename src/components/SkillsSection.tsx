import React from "react";
import Container from "./Container";
import Aws from "@root/public/assets/AWS.svg";
import Flutter from "@root/public/assets/Flutter.svg";
import Git from "@root/public/assets/Git.svg";
import Javascript from "@root/public/assets/Javascript.svg";
import Nextjs from "@root/public/assets/Nextjs.svg";
import ReactJs from "@root/public/assets/React.svg";
import Tailwind from "@root/public/assets/TailwindCSS.svg";

const SkillsSection = () => {
  return (
    <section id="tools" className="my-40">
      <Container>
        <h2 className="gradient-text font-bold text-2xl md:text-3xl lg:text-4xl mt-14">
          My skills and tools used
        </h2>
        <div className="flex flex-wrap items-center justify-center max-w-5xl mt-8 mx-auto gap-x-8 md:gap-x-12 gap-y-4 md:gap-y-8">
          <Javascript className="text-[4rem]" />
          <ReactJs className="text-[4rem]" />
          <Nextjs className="text-[4rem] text-black dark:text-white" />
          <Flutter className="text-[4rem]" />
          <Tailwind className="text-[4rem]" />
          <Aws className="text-[4rem] text-[#252F3E] dark:text-white" />
          <Git className="text-[4rem]" />
        </div>
      </Container>
    </section>
  );
};

export default SkillsSection;
