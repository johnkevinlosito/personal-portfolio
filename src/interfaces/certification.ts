import { Company } from "./company";

export type Certification = {
  certificate: string;
  url: string;
  fromDate: string; //yyyy-mm-dd
  toDate: string | null; //yyyy-mm-dd
  issuer: Company;
  badge: string;
  description: string;
};
