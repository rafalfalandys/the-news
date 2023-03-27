import { AVAILABLE_COUNTRIES } from "./config";
import { Country, QueryObj } from "./types";

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

export const filterCountries = (arr: Country[]) => {
  return arr.filter((country: Country) =>
    AVAILABLE_COUNTRIES.map(
      (code) => code === country.cca2.toLowerCase()
    ).reduce((acc, cur) => acc || cur)
  );
};
