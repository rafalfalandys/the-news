import { useSelector } from "react-redux";
import { buildArticleQuery } from "../helper";
import { RootState } from "../store";

const useQuery = () => {
  const pages = useSelector((state: RootState) => state.ui.pages.curent);
  const resultsState = useSelector(
    (state: RootState) => state.ui.results.onPage
  );

  const buildQuery: (
    countryCode: string,
    articleTitle: string | null,
    resultsPerPage?: number
  ) => string = (countryCode, articleTitle, resultsPerPage = resultsState) => {
    const article = articleTitle ? `/${buildArticleQuery(articleTitle)}` : "";
    const page = `?page=${pages}`;
    const results = `?results=${resultsPerPage}`;

    const query = "/country/" + countryCode + article + page + results;
    return query;
  };

  return buildQuery;
};

export default useQuery;
