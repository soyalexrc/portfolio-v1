import {Experience} from 'typings';

export const fetchExperience = async () => {
  const res = await fetch('/api/getExperience');

  const data = await res.json();
  const experience: Experience[] = data.experiences;

  return experience;
}
