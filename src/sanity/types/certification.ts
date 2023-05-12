import BlockContent from "./blockContent";
import Company from "./company";

export interface Certification {
  _id: string;
  certificate: string;
  fromDate: string;
  toDate: string | null;
  issuer: Company;
  badge: string;
  body: BlockContent[];
}
