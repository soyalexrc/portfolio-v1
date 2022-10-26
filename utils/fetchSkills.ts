import {groq} from "next-sanity";
import {sanityClient} from "sanity";

const query = groq`
  *[_type == 'skill']
`

export const fetchSkills = async () => {
  return await sanityClient.fetch(query)
}
