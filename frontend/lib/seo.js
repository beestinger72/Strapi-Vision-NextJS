 import { getStrapiURL } from "@/lib/api";

export function getGlobalVars() {
  const baseURL = getStrapiURL();
  return baseURL + "/global?populate=*"
}
