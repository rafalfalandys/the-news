import { useLocation } from "react-router-dom";
import { buildArticleQuery, buildQueryParams } from "../helper";
import { QueryObj } from "../types";

const useQuery = () => {
  // read queries params. To be used when new ones are not passed:
  const location = useLocation();
  const queries = buildQueryParams(location.search);

  // check the search keyword in order to handle modal window correctly
  const locationKeyword: string = location.search.includes("?keyword=")
    ? location.search.split("?")[1].split("=")[1]
    : "";

  // build query function. Country code is always required and other params comes as an optional object
  const buildQuery: (countryCode: string, queryObj?: QueryObj) => string = (
    countryCode,
    queryObj
  ) => {
    const article = queryObj?.articleTitle
      ? `/${buildArticleQuery(queryObj.articleTitle)}`
      : "";

    // 1st use keyword from object, if no
    // 2nd reuse one from url, if no
    // 3rd do not use keyword
    let keyword = queryObj?.keyword ? `?keyword=${queryObj.keyword}` : "";
    if (queryObj?.keyword) keyword = `?keyword=${queryObj.keyword}`;
    if (!queryObj?.keyword && locationKeyword)
      keyword = `?keyword=${locationKeyword}`;
    if (queryObj?.keyword === "__skip__") keyword = "";

    // use cur page/results per page from obj, if no take ones from url
    const page = `?page=${queryObj?.page || queries.page}`;
    const results = `?results=${queryObj?.results || queries.results || 20}`;

    const query =
      "/country/" + countryCode + article + keyword + page + results;
    // for example: /country/all?keyword=lala?page=1?results=10
    // or           /country/pl/-miertelny-po-ar-w-t?page=1?results=10

    return query;
  };

  return buildQuery;
};

export default useQuery;
