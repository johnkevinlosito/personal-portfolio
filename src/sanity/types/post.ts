import BlockContent from "./blockContent";
import Category from "./category";

export default interface Post {
  slug: string;
  title: string;
  mainImage: string;
  excerpt: string;
  estimatedReadingTime: number;
  categories: Category[];
  body: BlockContent[];
  seoDescription: string;
  publishedAt: string;
  updatedAt: string;
}
