import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { buildArticleQuery } from "../helper";
import { RootState } from "../store";
import { QueryObj } from "../types";

const useQuery = () => {
  // get state of current page and results per page. To be used when new ones are not passed:
  const pages = useSelector((state: RootState) => state.ui.pages.curent);
  const resultsState = useSelector(
    (state: RootState) => state.ui.results.onPage
  );
  const location = useLocation();

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
    const keyword = queryObj?.keyword
      ? `?keyword=${queryObj.keyword}`
      : locationKeyword
      ? `?keyword=${locationKeyword}`
      : "";

    const page = `?page=${queryObj?.page || pages}`;
    const results = `?results=${queryObj?.results || resultsState}`;

    const query =
      "/country/" + countryCode + article + keyword + page + results;
    // for example: /country/all?keyword=lala?page=1?results=10
    // or           /country/pl/-miertelny-po-ar-w-t?page=1?results=10

    return query;
  };

  return buildQuery;
};

export default useQuery;
