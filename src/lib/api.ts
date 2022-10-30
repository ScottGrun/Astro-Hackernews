import { mapPagePath } from "../helpers/mapNames";

const fetchApi = async (endpoint: string) => {
  const headers = { "User-Agent": "chrome" };
  return fetch(endpoint, { headers }).then((response) => response.json());
};

export const fetchPost = async (path: string) => {
  const endpoint = `https://api.hackerwebapp.com/${path}`;
  console.log(endpoint);
  return fetchApi(endpoint);
};

export const fetchPage = async (path: keyof typeof mapPagePath) => {
  const endpoint = `https://api.hackerwebapp.com/${mapPagePath[path]}`;
  return fetchApi(endpoint);
};
