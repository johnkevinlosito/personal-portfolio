import BlockContent from "./blockContent";
import Company from "./company";

export default interface Education {
  _id: string;
  course: string;
  body: BlockContent[];
  date: string;
  school: Company;
}
