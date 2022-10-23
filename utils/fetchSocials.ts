import {Social} from 'typings';
import { server } from "./url-config";

export const fetchSocials = async () => {
  const res = await fetch(`${server}/api/getSocials`);

  const data = await res.json();
  const socials: Social[] = data.socials;

  return socials;
}
