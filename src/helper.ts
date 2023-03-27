import { QueryObj } from "./types";

// build query from article titile to get proper modal window
export const buildArticleQuery = (string: string) =>
  string.trim().toLowerCase().replace(/\W/g, "-").slice(0, 20).trim();

export const buildQueryParams = (str: string) => {
  const query: string[] = str.split("?");
  query.shift();
  const queryObj: QueryObj = {};

  query.forEach((str) => {
    const arr = str.split("=");
    return (queryObj[arr[0]] = arr[1]);
  });

  return queryObj;
};
