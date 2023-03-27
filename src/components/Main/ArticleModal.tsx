import { Fragment } from "react";
import { useParams, useRouteLoaderData } from "react-router-dom";
import { buildArticleQuery } from "../../helper";
import { ArtcilesResObj } from "../../types";
import Modal from "../UI/Modal";
import classes from "./ArticleModal.module.scss";

const ArticleModal: React.FC = () => {
  const loaderData = useRouteLoaderData("country") as ArtcilesResObj;
  const params = useParams();

  const { articles } = loaderData;

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
            Link
          </a>
        </div>
      </Modal>
    </Fragment>
  );
};

export default ArticleModal;
