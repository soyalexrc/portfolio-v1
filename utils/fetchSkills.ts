import {Skill} from 'typings';
import { server } from "./url-config";

export const fetchSkills = async () => {
  const res = await fetch(`${server}/api/getSkills`);

  const data = await res.json();
  const skills: Skill[] = data.skills;

  return skills;
}
