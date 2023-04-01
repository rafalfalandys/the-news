import classes from "./Results.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import useText from "../../hooks/useText";

const Results: React.FC = () => {
  // get results from state
  const results = useSelector((state: RootState) => state.ui.results);
  const text = useText();

  return (
    <div className={classes.results}>
      <span className={classes["total__wrapper"]}>
        <span className={classes["total__text"]}>
          {text.footer.totalArticles}
        </span>
        <span className={classes["total__number"]}>{results.total}</span>
      </span>
      <span className={classes["phone-slash"]}>/</span>
      <span className={classes["on-screen__wrapper"]}>
        <span> {text.footer.onScreen}</span>
        <span className={classes["on-screen"]}>{results.onScreen}</span>
      </span>
    </div>
  );
};

export default Results;
