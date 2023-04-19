import Image from "next/image";
import React from "react";
import { FaGithub, FaLinkedin, FaDev, FaTwitter } from "react-icons/fa";

export const socialLinks = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/johnkevinlosito",
    icon: <FaLinkedin size="32" />,
  },
  {
    name: "Twitter",
    link: "https://twitter.com/johnkevinlosito",
    icon: <FaTwitter size="32" />,
  },
  {
    name: "Github",
    link: "https://github.com/johnkevinlosito",
    icon: <FaGithub size="32" />,
  },
  {
    name: "Devto",
    link: "https://dev.to/johnkevinlosito",
    icon: <FaDev size="32" />,
  },
];

const HeroSection = () => {
  return (
    <section id="hero" className="relative isolate overflow-hidden pt-14">
      <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-b from-slate-100 dark:from-semi-black sm:h-32" />
      <div
        className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] lg:shadow-xl dark:shadow-slate-700 sm:-mr-80 lg:-mr-96"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-7xl px-6 lg:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
          <h1 className="gradient-text max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl lg:col-span-2 xl:col-auto">
            Hey, I'm John Kevin 👋
          </h1>
          <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
            <p className="text-lg lg:text-2xl leading-8">
              I'm a passionate web and mobile developer. Naturally curious, and
              always seeking new knowledge and actively developing new skills.
            </p>
            <div className="mt-10 flex items-center gap-x-2">
              {socialLinks.map((social) => (
                <a
                  href={social.link}
                  key={social.name}
                  className="hover:opacity-80 duration-300 md:mr-4 mr-2"
                  rel="noreferrer"
                  target="_blank"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          <Image
            src="/assets/developer-activity-animate.svg"
            alt=""
            loading="eager"
            height={300}
            width={450}
            className="mt-10 lg:ml-20 aspect-square max-w-full object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36 h-auto w-auto"
          />
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-slate-100 dark:from-semi-black sm:h-32" />
    </section>
  );
};

export default HeroSection;
