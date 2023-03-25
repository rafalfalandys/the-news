import { LoaderFunction, useLoaderData } from "react-router-dom";
import { API_KEY, NEWS_URL } from "../../config";
import { ArtcilesResObj } from "../../types";
import ArticleCard from "./ArticleCard";
import classes from "./Main.module.scss";

const Main: React.FC = () => {
  const loaderData = useLoaderData() as ArtcilesResObj;
  const { articles } = loaderData;

  console.log(articles[0]);

  const articlesList = articles.map((article, i) => (
    <ArticleCard key={i} article={article} />
  ));

  const isGrid = false;

  return (
    <div className={classes.wrapper}>
      <main className={`${classes.main} ${isGrid ? "" : classes.list}`}>
        {articlesList}
      </main>
    </div>
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

    // const data = testArticlesObj;
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
