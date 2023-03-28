import classes from "./ArticleCard.module.scss";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { RootState } from "../../store";
import { Article } from "../../types";
import { buildDate } from "../../helper";

import useQuery from "../../hooks/useQuery";
import useText from "../../hooks/useText";

const ArticleCard: React.FC<{ article: Article }> = ({ article }) => {
  const isGridView = useSelector((state: RootState) => state.ui.isGridView);
  const params = useParams();
  const buildQuery = useQuery();
  const text = useText();

  // generate date or today / yesterday msg
  const time = buildDate(article.publishedAt, text.main.locales, text);

  return (
    <li className={`${classes.wrapper} ${isGridView ? "" : classes.list}`}>
      <Link
        to={buildQuery(params.countryCode!, {
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
              {article.urlToImage && <img src={article.urlToImage} alt="" />}
            </figure>
          )}
        </div>
      </Link>
    </li>
  );
};

export default ArticleCard;
