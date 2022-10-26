import {groq} from "next-sanity";
import {sanityClient} from 'sanity'

const query = groq`
  *[_type == 'experience'] {
    ...,
    technologies[]->
  }
`

export const fetchExperience = async () => {
  return await sanityClient.fetch(query);
}
