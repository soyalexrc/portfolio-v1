import {groq} from "next-sanity";
import { sanityClient } from 'sanity';

const query = groq`
  *[_type == 'social']
`


export const fetchSocials = async () => {
  return await sanityClient.fetch(query);
}
