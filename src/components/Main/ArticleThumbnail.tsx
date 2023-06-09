import classes from "./ArticleThumbnail.module.scss";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { RootState } from "../../store";
import { Article } from "../../types";
import { buildDate } from "../../helper";

import useBookmarks from "../../hooks/useBookmarks";
import useImageError from "../../hooks/useImageError";

import useQuery from "../../hooks/useQuery";
import useText from "../../hooks/useText";
import { BookmarkIcon } from "@heroicons/react/24/outline";
import { BookmarkIcon as BookmarkIconSolid } from "@heroicons/react/24/solid";

const ArticleCard: React.FC<{ article: Article }> = ({ article }) => {
  const isGridView = useSelector((state: RootState) => state.ui.isGridView);
  const params = useParams();
  const buildQuery = useQuery();
  const text = useText();
  const { isBookmarked, toggleBookmarkHandler } = useBookmarks(article);

  // handle img error
  const { imgSrc, handleImageError } = useImageError(article);

  // generate date or today / yesterday msg
  const time = buildDate(article.publishedAt, text.main.locales, text);

  return (
    <li
      className={`${classes.wrapper} ${isGridView ? "" : classes.list}`}
      aria-label="article card"
    >
      <Link
        to={buildQuery({
          to: params.countryCode || "bookmarks",
          articleTitle: article.title,
        })}
      >
        <div className={classes.card}>
          <div className={classes.textbox}>
            <div className={classes.source}>
              <h3>{article.source.name}</h3>
            </div>
            <h2>{article.title}</h2>
            <span className={classes.date}>{time}</span>
          </div>
          {isGridView && (
            <figure>
              {<img src={imgSrc} alt="" onError={handleImageError} />}
            </figure>
          )}
        </div>
      </Link>
      {!isBookmarked && (
        <BookmarkIcon
          className={classes.bookmark}
          onClick={toggleBookmarkHandler}
        />
      )}
      {isBookmarked && (
        <BookmarkIconSolid
          className={classes.bookmark}
          onClick={toggleBookmarkHandler}
        />
      )}
    </li>
  );
};

export default ArticleCard;
