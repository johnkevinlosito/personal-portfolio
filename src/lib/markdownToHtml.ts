import rehypeExternalLinks from "rehype-external-links";
import { unified } from "unified";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";

export default async function markdownToHtml(markdown: string) {
  const result = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeExternalLinks, {
      rel: ["noreferrer noopener"],
      target: "_blank",
    })
    .use(rehypeStringify)
    .process(markdown);
  return result.toString();
}
