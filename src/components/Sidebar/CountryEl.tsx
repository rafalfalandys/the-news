import { NavLink } from "react-router-dom";
import useQuery from "../../hooks/useQuery";

import classes from "./CountryEl.module.scss";

const CountryEl: React.FC<{ name: string; flag: string; code: string }> = (
  props
) => {
  const buildQuery = useQuery();

  return (
    <li className={classes.wrapper}>
      <NavLink
        to={buildQuery(props.code, null)}
        className={(navData) =>
          navData.isActive
            ? `${classes.country} ${classes.active}`
            : classes.country
        }
      >
        <div className={classes.flag}> {props.flag}</div>
        <span>{props.name}</span>
      </NavLink>
    </li>
  );
};

export default CountryEl;
