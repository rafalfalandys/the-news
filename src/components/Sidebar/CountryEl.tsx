import { Link } from "react-router-dom";
import classes from "./CountryEl.module.scss";

const CountryEl: React.FC<{ name: string; flag: string; code: string }> = (
  props
) => {
  return (
    <li className={classes.wrapper}>
      <Link to={`country/${props.code}`} className={classes.country}>
        <div className={classes.flag}> {props.flag}</div>
        <span>{props.name}</span>
      </Link>
    </li>
  );
};

export default CountryEl;
