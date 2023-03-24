import { Article } from "../../types";
import classes from "./ArticleCard.module.scss";

const ArticleCard: React.FC<{ article: Article }> = ({ article }) => {
  console.log(article);
  return (
    <li className={classes.wrapper}>
      <a href={article.url} target="_blank" rel="noreferrer">
        {article.title}
      </a>
      <div className={classes.article}></div>
    </li>
  );
};

export default ArticleCard;
