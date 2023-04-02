import classes from "./Main.module.scss";
import { useSelector } from "react-redux";
import { Outlet, useLoaderData, useParams } from "react-router-dom";
import { RootState } from "../../store";
import { ArtcilesResObj } from "../../types";

import { Fragment } from "react";
import ArticleCard from "./ArticleThumbnail";
import PaginationEl from "./PaginationEl";
import useText from "../../hooks/useText";

const Main: React.FC = () => {
  const loaderData = useLoaderData() as ArtcilesResObj;
  const isGridView = useSelector((state: RootState) => state.ui.isGridView);
  const texts = useText();
  const params = useParams();

  //////////// APP DATA MAIN ENTRY POINT ////////////////
  const { articles } = loaderData;

  const articlesList = articles.map((article, i) => (
    <ArticleCard key={i} article={article} />
  ));

  return (
    <Fragment>
      <div className={classes.wrapper}>
        {!articlesList.length && (
          <h2 className={classes.error}>
            {params.countryCode ? texts.main.error : texts.bookmarks.error}
          </h2>
        )}
        {!!articlesList.length && (
          <main className={classes.main}>
            <ul
              className={
                isGridView ? `${classes.list} ${classes.grid}` : classes.list
              }
            >
              {articlesList}
            </ul>

            {/* hide pagination in bookmarks */}
            {params.countryCode && (
              <div className={classes["pagination-wrapper"]}>
                <PaginationEl />
              </div>
            )}
          </main>
        )}
      </div>
      {/* outlet for article details modal window */}
      <Outlet />
    </Fragment>
  );
};

export default Main;
