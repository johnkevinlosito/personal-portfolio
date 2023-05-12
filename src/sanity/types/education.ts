import BlockContent from "./blockContent";
import Company from "./company";

export interface Education {
  _id: string;
  course: string;
  body: BlockContent[];
  date: string;
  school: Company;
}
