import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import useQuery from "../../hooks/useQuery";
import { RootState } from "../../store";
import { Article } from "../../types";
import classes from "./ArticleCard.module.scss";

const ArticleCard: React.FC<{ article: Article }> = ({ article }) => {
  const isGridView = useSelector((state: RootState) => state.ui.isGridView);
  const params = useParams();
  const buildQuery = useQuery();

  // generate date or today / yesterday msg
  const now = new Date();
  const publishedAt = new Date(article.publishedAt);

  const formattedDate = new Intl.DateTimeFormat("pl-PL", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(publishedAt);

  const timePast = now.getTime() - publishedAt.getTime();
  const calcTime = () => {
    if (timePast < 1000 * 60 * 60 * 24) return "Today";
    if (timePast < 1000 * 60 * 60 * 48) return "Yesterday";
    else return formattedDate;
  };

  const time = calcTime();

  return (
    <li className={`${classes.wrapper} ${isGridView ? "" : classes.list}`}>
      <Link to={buildQuery(params.countryCode!, article.title)}>
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
              {article.urlToImage && <img src={article.urlToImage} alt="" />}
            </figure>
          )}
        </div>
      </Link>
    </li>
  );
};

export default ArticleCard;
