import { Fragment } from "react";
import { useSelector } from "react-redux";
import { LoaderFunction, Outlet, useLoaderData } from "react-router-dom";
import { API_KEY, NEWS_URL } from "../../config";
import store, { RootState } from "../../store";
import { uiActions } from "../../store/ui-slice";
import { ArtcilesResObj } from "../../types";
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

export const loader: LoaderFunction = async ({ params, request }) => {
  try {
    const query: string = request.url.split("?keyword=")[1];

    // if param = 'all' = fetch all artciles. If param = country code fetch only articles for this country
    const fetchPromise =
      params.countryCode === "all"
        ? fetch(NEWS_URL + `everything?q=${query}`, fetchOptions)
        : fetch(
            NEWS_URL + `top-headlines?country=${params.countryCode}`,
            fetchOptions
          );

    const res = await fetchPromise;

    if (!res.ok) throw new Error("Could not fetch news data");

    const data: ArtcilesResObj = await res.json();

    store.dispatch(
      uiActions.controlResults({
        onPage: data.articles.length,
        total: data.totalResults,
      })
    );

    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
