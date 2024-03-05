import { Company } from "./company";

export type Job = {
  jobTitle: string;
  company: Company;
  description: string;
  fromDate: string; //yyyy-mm-dd
  toDate: string | null;
  skills: string[];
};
