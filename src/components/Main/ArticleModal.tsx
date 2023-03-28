import classes from "./ArticleModal.module.scss";
import { useParams, useRouteLoaderData } from "react-router-dom";
import { buildArticleQuery } from "../../helper";
import { ArtcilesResObj } from "../../types";

import { Fragment } from "react";
import Modal from "../UI/Modal";
import useText from "../../hooks/useText";

const ArticleModal: React.FC = () => {
  const loaderData = useRouteLoaderData("country") as ArtcilesResObj;
  const params = useParams();
  const text = useText();

  const { articles } = loaderData;

  // find proper modal to display by the url
  const article = articles.find(
    (article) => buildArticleQuery(article.title) === params.articleDetails
  );

  return (
    <Fragment>
      <Modal>
        <div className={classes.content}>
          <h1>{article?.author}</h1>
          <p>{article?.content}</p>
          <a href={article?.url} target="_blank" rel="noreferrer">
            {text.articleDetails.link}
          </a>
        </div>
      </Modal>
    </Fragment>
  );
};

export default ArticleModal;
