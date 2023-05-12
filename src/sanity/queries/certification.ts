import { groq } from "next-sanity";

export const certificationQuery = groq`
*[_type == "certification"] {
  _id,
  certificate,
  body,
  fromDate,
  toDate,
  "issuer": issuer-> {
    name,
    url,
    "logo": logo.asset->.url,
  },
  "badge":badge.asset->url,
}
`;
