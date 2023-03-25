import { time } from "console";
import { Article } from "../../types";
import classes from "./ArticleCard.module.scss";

const ArticleCard: React.FC<{ article: Article }> = ({ article }) => {
  // generate date or today / yesterday msg
  const now = new Date();
  const datePublished = new Date(article.publishedAt);

  const publishedAtFormatted = new Intl.DateTimeFormat("pl-PL", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(datePublished);

  const timePast = now.getTime() - datePublished.getTime();
  const calcTime = () => {
    if (timePast < 1000 * 60 * 60 * 24) return "Today";
    if (timePast < 1000 * 60 * 60 * 48) return "Yesterday";
    else return publishedAtFormatted;
  };

  const time = calcTime();

  // tiles / list switch
  const isGrid = false;

  return (
    <li className={`${classes.wrapper} ${isGrid ? "" : classes.list}`}>
      <div className={classes.card}>
        <div className={classes.textbox}>
          <h3>{article.source.name}</h3>
          <h2>{article.title}</h2>
          <span className={classes.date}>{time}</span>
        </div>
        {isGrid && (
          <figure>
            {article.urlToImage && <img src={article.urlToImage} alt="" />}
          </figure>
        )}
      </div>
    </li>
  );
};

export default ArticleCard;

// tytul
// zrodlo
// data
