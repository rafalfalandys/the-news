import { useSelector } from "react-redux";
import { RootState } from "../../store";
import classes from "./Results.module.scss";

const Results: React.FC = () => {
  const results = useSelector((state: RootState) => state.ui.results);

  return (
    <div className={classes.results}>
      <span>
        <span className={classes.total}>{results.total}</span>
        articles
      </span>
      <span>
        <span className={classes["on-page"]}>{results.onPage}</span>
        per page
      </span>
    </div>
  );
};

export default Results;
