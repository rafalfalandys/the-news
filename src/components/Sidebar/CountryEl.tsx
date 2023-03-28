import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import useQuery from "../../hooks/useQuery";
import { uiActions } from "../../store/ui-slice";

import classes from "./CountryEl.module.scss";

const CountryEl: React.FC<{ name: string; flag: string; code: string }> = (
  props
) => {
  const buildQuery = useQuery();
  const dispatch = useDispatch();

  const toggleSidebar = () => dispatch(uiActions.toggleSidebar());

  return (
    <li className={classes.wrapper} onClick={toggleSidebar}>
      <NavLink
        to={buildQuery(props.code, { page: 1, keyword: "__skip__" })}
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
