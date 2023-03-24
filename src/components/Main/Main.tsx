import { LoaderFunction, useLoaderData } from "react-router-dom";
import { API_KEY, NEWS_URL } from "../../config";
import { ArtcilesResObj } from "../../types";
import ArticleCard from "./ArticleCard";
import classes from "./Main.module.scss";

const Main: React.FC = () => {
  const loaderData = useLoaderData() as ArtcilesResObj;
  const { articles } = loaderData;

  const articlesList = articles.map((article, i) => (
    <ArticleCard key={i} article={article} />
  ));

  return (
    <div className={classes.wrapper}>
      <main className={classes.main}>{articlesList}</main>
    </div>
  );
};

export default Main;

////////////////////////////////////////////////////////
/////////////////// LOADER FUNCTION ////////////////////
////////////////////////////////////////////////////////

const fetchOptions = {
  method: "GET",
  headers: {
    "X-Api-Key": `${API_KEY}`,
  },
};

export const loader: LoaderFunction = async ({ params }) => {
  try {
    console.log("test");
    const fetchPromise =
      params.countryCode === "all"
        ? fetch(NEWS_URL + "everything?q=keyword", fetchOptions)
        : fetch(
            NEWS_URL + `top-headlines?country=${params.countryCode}`,
            fetchOptions
          );

    const res = await fetchPromise;

    // const res = await fetch(NEWS_URL + "everything?q=keyword", fetchOptions);

    if (!res.ok) throw new Error("Could not fetch news data");

    const data: ArtcilesResObj = await res.json();

    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
