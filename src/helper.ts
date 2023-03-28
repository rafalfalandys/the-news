import { TextObj } from "./assets/texts";
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

// generate date or today / yesterday msg
export const buildDate: (
  date: string,
  locales: string,
  text: TextObj
) => string = (date, locales, text) => {
  const now = new Date();
  const publishedAt = new Date(date);

  const formattedDate = new Intl.DateTimeFormat(locales, {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(publishedAt);

  const timePast = now.getTime() - publishedAt.getTime();
  const calcTime = () => {
    if (timePast < 1000 * 60 * 60 * 24) return text.main.today;
    if (timePast < 1000 * 60 * 60 * 48) return text.main.yesterday;
    else return formattedDate;
  };

  return calcTime();
};

// filtering countries by search query
export const searchCountries: (name: string, query: string) => boolean = (
  name,
  query
) => name.toLowerCase().includes(query.toLowerCase().trim());

export const sortCountries: (a: string, b: string) => number = (a, b) => {
  if (a.includes("Pol")) return -1;
  if (b.includes("Pol")) return 1;
  if (a < b) return -1;
  if (a > b) return 1;
  else return 0;
};
