import classes from "./Footer.module.scss";
import { useLocation } from "react-router-dom";

import Results from "./Results";
import Clock from "./Clock";

const Footer: React.FC = () => {
  const location = useLocation();

  const isArticleView =
    location.pathname.includes("/country") ||
    location.pathname.includes("/bookmarks");

  return (
    <div className={classes.wrapper}>
      <footer className={classes.footer}>
        {/* only show number of results when articles are loaded */}
        {isArticleView && <Results />}
        <Clock />
      </footer>
    </div>
  );
};

export default Footer;
