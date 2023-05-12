import { groq } from "next-sanity";

export const educationQuery = groq`
*[_type == "education"] {
  course,
  body,
  date,
  "school": school-> {
    name,
    url,
    "logo": logo.asset->.url,
  }
}
`;
