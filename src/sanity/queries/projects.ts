import { groq } from "next-sanity";

export const projectsQuery = (slug?: string) => groq`
*[_type == "project"${
  slug ? ` && slug.current == "${slug}"` : ""
}] | order(publishedAt desc) {
  _id,
  title,
  overview,
  "slug": slug.current,
  "skills": skills[]->.title,
  publishedAt,
  "updatedAt": _updatedAt,
  "coverImage": coverImage.asset->url,
  description,
  "client": client-> {
    name,
    url,
    "logo": logo.asset->.url,
  },
  "post": post-> {
    slug,
  },
  site,
  repo
}
`;
