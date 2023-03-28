import classes from "./Footer.module.scss";
import { useParams } from "react-router-dom";

import Results from "./Results";
import Clock from "./Clock";

const Footer: React.FC = () => {
  const params = useParams();

  return (
    <div className={classes.wrapper}>
      <footer className={classes.footer}>
        {/* only show number of results when articles are loaded */}
        {params.countryCode && <Results />}
        <Clock />
      </footer>
    </div>
  );
};

export default Footer;
