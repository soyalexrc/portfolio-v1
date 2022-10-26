import {sanityClient} from 'sanity';
import {groq} from "next-sanity";

const query = groq`
  *[_type == 'project'] {
    ...,
    technologies[]->
  }
`

export const fetchProjects = async () => {
  return await sanityClient.fetch(query)
}
