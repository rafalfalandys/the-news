import classes from "./Logo.module.scss";
import { Link } from "react-router-dom";

const Logo: React.FC = () => {
  return (
    <Link to="/" className={classes.logo} aria-label="link to home">
      <h1>
        gn<span>News</span>!
      </h1>
    </Link>
  );
};

export default Logo;
