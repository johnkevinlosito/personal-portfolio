import { Company } from "./company";

export type Education = {
  course: string;
  school: Company;
  description: string;
  dateGraduated: string; //yyyy-mm-dd
};
