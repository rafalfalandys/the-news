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
      <span>
        {text.footer.totalArticles}
        <span className={classes.total}>{results.total}</span>
      </span>
      <span>
        {text.footer.onScreen}
        <span className={classes["on-screen"]}>{results.onScreen}</span>
      </span>
    </div>
  );
};

export default Results;
