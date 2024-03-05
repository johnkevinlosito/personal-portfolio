import { Project } from "@/interfaces/project";

export const projects: Project[] = [
  {
    title: "Pokedex",
    coverImage: "/assets/projects/pokedex_transparent-2.png",
    post: "",
    site: "https://pokedex.johnkevinlosito.com/",
    repo: "https://github.com/johnkevinlosito/pokedex",
    skills: ["React JS"],
    client: null,
    description: `This is a personal project I made when learning React JS. The layout / UI is inspired from a Figma community file which can be found <a href="https://www.figma.com/community/file/893705420616737018" rel="noreferrer noopener" target="_blank">on this figma link</a> and is licensed under <a href="https://creativecommons.org/licenses/by/4.0/" rel="noreferrer noopener" target="_blank">CC BY 4.0</a>
    <br />
    This project fetches its data from <a href="https://pokeapi.co/" rel="noreferrer noopener" target="_blank">https://pokeapi.co/</a> which is a free and open to use consumption-only API.`,
    publishedAt: "2021-08-30",
  },
  {
    title: "Cloudresume Project",
    coverImage: "/assets/projects/cloudresume.png",
    post: "cloudresumechallenge-challenging-indeed",
    site: "",
    repo: "https://github.com/johnkevinlosito/cloudresumechallenge",
    skills: ["AWS", "Serverless", "Python", "CDK"],
    client: null,
    description: `Output project from <a href="https://cloudresumechallenge.dev" rel="noreferrer noopener" target="_blank">cloudresumechallenge.dev</a>. A serverless personal website built with AWS services.`,
    publishedAt: "2020-07-28",
  },
];
