import classes from "./ArticleModal.module.scss";
import { useParams, useRouteLoaderData } from "react-router-dom";
import { buildArticleQuery, buildDate } from "../../helper";
import { ArtcilesResObj } from "../../types";

import { Fragment } from "react";
import Modal from "../UI/Modal";
import useText from "../../hooks/useText";
import useImageError from "../../hooks/useImageError";

const ArticleModal: React.FC = () => {
  const params = useParams();
  // use loader depending on if it is a bookmarks page
  const loaderData = useRouteLoaderData(
    `${params.countryCode ? "country" : "bookmarks"}`
  ) as ArtcilesResObj;
  const text = useText();

  const { articles } = loaderData;

  // find proper modal to display by the url
  const article = articles.find(
    (article) =>
      buildArticleQuery(article.title) ===
      buildArticleQuery(params.articleDetails!)
  );

  // handle img error
  const { imgSrc, handleImageError } = useImageError(article);

  const time = buildDate(article!.publishedAt, text.main.locales, text);

  // get current scroll to display modal in proper posiiton
  const curScroll = document.documentElement.scrollTop;

  return (
    <Fragment>
      <Modal isVisible={true} curScroll={curScroll}>
        <div className={classes.wrapper}>
          {/* Header */}
          <section className={classes.head}>
            <div className={classes.text}>
              <h1>{article?.title}</h1>
              <h2>
                {text.articleDetails.author} {article?.author || "Unknown"}
              </h2>
              <h3>{time}</h3>
            </div>

            {/* Image */}
            <figure>
              <img src={imgSrc} alt="" onError={handleImageError} />
            </figure>
          </section>

          {/* text */}
          <section className={classes.content}>
            <p>{article?.description}</p>
            <p>{article?.content}</p>
            <a href={article?.url} target="_blank" rel="noreferrer">
              <h3>{text.articleDetails.link}</h3>
            </a>
          </section>
        </div>
      </Modal>
    </Fragment>
  );
};

export default ArticleModal;
