import React from "react";
import Container from "./Container";

const SkillsSection = () => {
  return (
    <section id="tools" className="my-40">
      <Container>
        <h2 className="gradient-text font-bold text-2xl md:text-3xl lg:text-4xl mt-14">
          My skills and tools used
        </h2>

        <div className="flex flex-wrap items-center justify-center max-w-5xl mt-8 mx-auto gap-x-8 md:gap-x-12 gap-y-4 md:gap-y-8">
          <i className="devicon-javascript-plain colored text-[4rem]" />
          <i className="devicon-react-original colored text-[4rem]" />
          <i className="devicon-flutter-plain colored text-[3rem]" />
          <i className="devicon-nextjs-original-wordmark text-[8rem] text-black dark:text-white" />
          <i className="devicon-tailwindcss-original-wordmark colored text-[10rem]" />
          <i className="devicon-amazonwebservices-plain-wordmark colored text-[7rem]" />
          <i className="devicon-git-plain colored text-[4rem]" />
        </div>
      </Container>
    </section>
  );
};

export default SkillsSection;
