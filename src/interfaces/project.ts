import { Company } from "./company";

export type Project = {
  title: string;
  coverImage: string;
  post: string;
  site: string;
  repo: string;
  skills: string[];
  client: Company | null;
  description: string;
  publishedAt: string;
};
