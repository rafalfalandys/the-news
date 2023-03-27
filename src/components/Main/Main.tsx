import { Fragment } from "react";
import { useSelector } from "react-redux";
import { LoaderFunction, Outlet, useLoaderData } from "react-router-dom";
import { API_KEY, NEWS_URL } from "../../config";
import store, { RootState } from "../../store";
import { uiActions } from "../../store/ui-slice";
import { ArtcilesResObj, QueryObj } from "../../types";
import ArticleCard from "./ArticleCard";
import classes from "./Main.module.scss";

const Main: React.FC = () => {
  const loaderData = useLoaderData() as ArtcilesResObj;
  const isGridView = useSelector((state: RootState) => state.ui.isGridView);

  const { articles } = loaderData;

  const articlesList = articles.map((article, i) => (
    <ArticleCard key={i} article={article} />
  ));

  return (
    <Fragment>
      <Outlet />
      <div className={classes.wrapper}>
        <main className={`${classes.main} ${isGridView ? "" : classes.list}`}>
          {articlesList}
        </main>
      </div>
    </Fragment>
  );
};

export default Main;

////////////////////////////////////////////////////////
////////// LOADER FUNCTION - loading articles //////////
////////////////////////////////////////////////////////

// reusable fetch options object
const fetchOptions = {
  method: "GET",
  headers: {
    "X-Api-Key": `${API_KEY}`,
  },
};

const buildQueryParams = (data: string) => {
  const queryTest: string[] = data.split("?");
  queryTest.shift();
  const queryObj: QueryObj = {};

  queryTest.forEach((str) => {
    const arr = str.split("=");
    return (queryObj[arr[0]] = arr[1]);
  });

  return queryObj;
};

export const loader: LoaderFunction = async ({ params, request }) => {
  try {
    const queries: QueryObj = buildQueryParams(request.url);

    // if param = 'all' = fetch random artciles. If param = country code fetch only articles for this country
    const fetchUrl =
      params.countryCode === "all"
        ? NEWS_URL +
          `everything?q=${queries.keyword}&pageSize=${queries.results}&page=${queries.page}`
        : NEWS_URL +
          `top-headlines?country=${params.countryCode}&pageSize=${queries.results}&page=${queries.page}`;

    const res = await fetch(fetchUrl, fetchOptions);

    if (!res.ok) throw new Error("Could not fetch news data");

    const data: ArtcilesResObj = await res.json();
    const resultsNum = queries.results || 20;

    store.dispatch(
      uiActions.controlResults({
        onPage: resultsNum,
        total: data.totalResults,
      })
    );

    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
