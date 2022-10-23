import {Experience} from 'typings';
import { server } from "./url-config";

export const fetchExperience = async () => {
  const res = await fetch(`${server}/api/getExperience`);

  const data = await res.json();
  const experience: Experience[] = data.experiences;

  return experience;
}
