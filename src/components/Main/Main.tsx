import classes from "./Main.module.scss";
import { useSelector } from "react-redux";
import { Outlet, useLoaderData } from "react-router-dom";
import { RootState } from "../../store";
import { ArtcilesResObj } from "../../types";

import { Fragment } from "react";
import ArticleCard from "./ArticleCard";
import PaginationEl from "./PaginationEl";

const Main: React.FC = () => {
  const loaderData = useLoaderData() as ArtcilesResObj;
  const isGridView = useSelector((state: RootState) => state.ui.isGridView);

  //////////// APP DATA MAIN ENTRY POINT ////////////////
  const { articles } = loaderData;

  const articlesList = articles.map((article, i) => (
    <ArticleCard key={i} article={article} />
  ));

  // get current scroll to display modal in proper posiiton
  const curScroll = document.documentElement.scrollTop;

  return (
    <Fragment>
      <Outlet context={{ curScroll }} />
      {/* outlet for article details modal window */}
      <div className={classes.wrapper}>
        <main className={classes.main}>
          <ul
            className={
              isGridView ? `${classes.list} ${classes.grid}` : classes.list
            }
          >
            {articlesList}
          </ul>
          <div className={classes["pagination-wrapper"]}>
            <PaginationEl />
          </div>
        </main>
      </div>
    </Fragment>
  );
};

export default Main;
