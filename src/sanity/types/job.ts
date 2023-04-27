import BlockContent from "./blockContent";
import Company from "./company";

export default interface Job {
  _id: string;
  jobTitle: string;
  company: Company;
  description: BlockContent[];
  fromDate: string;
  toDate: string | null;
  skills: string[];
}
