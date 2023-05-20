import Job from "@/sanity/types/job";
import { PortableText } from "@portabletext/react";
import { format } from "date-fns";
import Image from "next/image";
import React from "react";
import components from "./PortableTextComponents";

interface ExperienceProps {
  jobs: Job[];
}

const ExperienceSection = ({ jobs }: ExperienceProps) => {
  return (
    <section>
      <h2 className="gradient-text font-bold text-2xl md:text-3xl lg:text-4xl mt-14">
        Work Experience
      </h2>
      {jobs.map(
        ({ _id, company, jobTitle, fromDate, toDate, skills, description }) => (
          <article
            key={_id}
            className="relative grid md:grid-cols-5 md:gap-10 before:content-[''] mx-12 before:block before:h-full before:absolute before:left-[-25px] md:before:left-[-37px] before:border-l-2 before:border-gray-300 dark:before:border-gray-700 md:space-x-4 pb-12 mt-8"
          >
            <div className="relative pb-12 md:col-span-2">
              <div className="sticky top-28">
                <svg
                  className="absolute left-[-38px] md:left-[-50px] bg-slate-100 dark:bg-semi-black rounded-full dark:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="28"
                  height="28"
                >
                  <path
                    fillRule="evenodd"
                    d="M15.5 11.75a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zm1.444-.75a5.001 5.001 0 00-9.888 0H2.75a.75.75 0 100 1.5h4.306a5.001 5.001 0 009.888 0h4.306a.75.75 0 100-1.5h-4.306z"
                    fill="currentColor"
                  ></path>
                </svg>
                <h3 className="p-0 m-0">{jobTitle}</h3>

                {company.url ? (
                  <a
                    className="p-0 m-0 relative underlined"
                    href={company.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {company.name}
                  </a>
                ) : (
                  <p className="p-0 m-0">{company.name}</p>
                )}
                <p className="p-0 m-0 text-sm text-gray-500">{`${format(
                  new Date(fromDate),
                  "MMM yyyy"
                )} — ${
                  toDate ? format(new Date(toDate), "MMM yyyy") : "present"
                }`}</p>
                {company.logo && (
                  <Image
                    src={company.logo}
                    alt={company.name}
                    width={64}
                    height={64}
                    className="rounded-md mt-4"
                  />
                )}
              </div>
            </div>
            <div className="relative pb-4 md:border-b md:border-gray-300 md:dark:border-gray-400 md:col-span-3">
              <PortableText value={description} components={components} />
              <p>
                <strong>Technologies: </strong>
                {skills.join(", ")}
              </p>
            </div>
          </article>
        )
      )}
    </section>
  );
};

export default ExperienceSection;
