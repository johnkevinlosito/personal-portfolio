import { groq } from "next-sanity";

export const postsQuery = (slug?: string) => groq`
*[_type == "post"${
  slug ? ` && slug.current == "${slug}"` : ""
}] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  "excerpt": array::join(string::split((pt::text(body)), "")[0..255], "") + "...",
  "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180 ),
  "categories": categories[]->.title,
  publishedAt,
  "updatedAt": _updatedAt,
  "mainImage": mainImage.asset->url,
  body,
}
`;