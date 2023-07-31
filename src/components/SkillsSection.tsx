import React from "react";
import Container from "./Container";
import Aws from "@root/public/assets/AWS.svg";
import Flutter from "@root/public/assets/Flutter.svg";
import Git from "@root/public/assets/Git.svg";
import Javascript from "@root/public/assets/JavaScript.svg";
import Nextjs from "@root/public/assets/Nextjs.svg";
import ReactJs from "@root/public/assets/React.svg";
import Tailwind from "@root/public/assets/TailwindCSS.svg";
import CSS3 from "@root/public/assets/CSS3.svg";
import HTML5 from "@root/public/assets/HTML5.svg";
import Docker from "@root/public/assets/Docker.svg";
import GitLab from "@root/public/assets/GitLab.svg";
import GitHub from "@root/public/assets/GitHub.svg";
import Nodejs from "@root/public/assets/Nodejs.svg";
import Python from "@root/public/assets/Python.svg";

const SkillsSection = () => {
  return (
    <section id="tools" className="my-40">
      <Container>
        <h2 className="gradient-text font-bold text-2xl md:text-3xl lg:text-4xl mt-14 pb-8">
          My technical skills and tools
        </h2>
        <div className="flex flex-wrap items-center justify-center max-w-4xl mt-8 mx-auto gap-x-8 md:gap-x-12 gap-y-4 md:gap-y-8">
          <HTML5 className="text-[4rem]" />
          <CSS3 className="text-[4rem]" />
          <Javascript className="text-[4rem]" />
          <ReactJs className="text-[4rem]" />
          <Nextjs className="text-[4rem] text-black dark:text-white" />
          <Flutter className="text-[3.5rem]" />
          <Tailwind className="text-[4.5rem]" />
          <Aws className="text-[4.5rem] text-[#252F3E] dark:text-white" />
          <Git className="text-[4rem]" />
          <Docker className="text-[5.5rem]" />
          <GitHub className="text-[4rem] text-[#181616] dark:text-white" />
          <GitLab className="text-[4rem]" />
          <Nodejs className="text-[4rem]" />
          <Python className="text-[4rem]" />
        </div>
        <div className="sr-only">
          <p>HTML</p>
          <p>CSS</p>
          <p>Javascript</p>
          <p>ReactJs</p>
          <p>Nextjs</p>
          <p>Flutter</p>
          <p>Tailwind</p>
          <p>Aws</p>
          <p>Git</p>
          <p>Docker</p>
          <p>GitHub</p>
          <p>GitLab</p>
          <p>Nodejs</p>
          <p>Python</p>
        </div>
      </Container>
    </section>
  );
};

export default SkillsSection;
