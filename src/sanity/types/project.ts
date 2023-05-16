import BlockContent from "./blockContent";
import Company from "./company";
import Post from "./post";

export default interface Project {
  slug: string;
  title: string;
  coverImage: string;
  overview: string;
  post: Post;
  site: string;
  repo: string;
  skills: string[];
  client: Company;
  description: BlockContent[];
  publishedAt: string;
  updatedAt: string;
}
