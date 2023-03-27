import { useSelector } from "react-redux";
import { RootState } from "../../store";
import classes from "./Results.module.scss";

const Results: React.FC = () => {
  const results = useSelector((state: RootState) => state.ui.results);

  return (
    <div className={classes.results}>
      <span>
        Total articles:
        <span className={classes.total}>{results.total}</span>
      </span>
      <span>
        Displaying:
        <span className={classes["on-screen"]}>{results.onScreen}</span>
      </span>
    </div>
  );
};

export default Results;
