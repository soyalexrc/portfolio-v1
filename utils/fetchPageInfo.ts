import {groq} from "next-sanity";
import {sanityClient} from "sanity";

const query = groq`
  *[_type == 'pageInfo'][0]
`

export const fetchPageInfo = async () => {
  return await sanityClient.fetch(query);
}
