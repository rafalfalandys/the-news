import classes from "./Footer.module.scss";
import Clock from "./Clock";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const Footer: React.FC = () => {
  const results = useSelector((state: RootState) => state.ui.results);

  return (
    <div className={classes.wrapper}>
      <footer className={classes.footer}>
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
        <Clock />
      </footer>
    </div>
  );
};

export default Footer;
