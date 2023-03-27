import { useSelector } from "react-redux";
import useText from "../../hooks/useText";
import { RootState } from "../../store";
import classes from "./Results.module.scss";

const Results: React.FC = () => {
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
