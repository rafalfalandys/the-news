import classes from "./Footer.module.scss";
import Clock from "./Clock";
import Results from "./Results";
import { useParams } from "react-router-dom";

const Footer: React.FC = () => {
  const params = useParams();

  return (
    <div className={classes.wrapper}>
      <footer className={classes.footer}>
        {params.countryCode && <Results />}
        <Clock />
      </footer>
    </div>
  );
};

export default Footer;
