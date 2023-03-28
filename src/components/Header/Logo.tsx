import classes from "./Logo.module.scss";
import { Link } from "react-router-dom";

const Logo: React.FC = () => {
  return (
    <Link to="/" className={classes.logo}>
      <h1>
        The&nbsp;<span>News</span>!
      </h1>
    </Link>
  );
};

export default Logo;
