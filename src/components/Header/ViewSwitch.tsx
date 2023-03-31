import classes from "./ViewSwitch.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { uiActions } from "../../store/ui-slice";
import { ListBulletIcon, Squares2X2Icon } from "@heroicons/react/24/outline";
import useText from "../../hooks/useText";

const ViewSwitch: React.FC = () => {
  const dispatch = useDispatch();
  const text = useText();

  // get current layout state
  const isGridView = useSelector((state: RootState) => state.ui.isGridView);

  // layout control handlers
  const switchToGridHandler = () => dispatch(uiActions.controlLayout("grid"));
  const switchToListHandler = () => dispatch(uiActions.controlLayout("list"));

  return (
    <div className={classes["switch--wrapper"]} aria-label="list/grid switch">
      <div
        className={`${classes["switch--btn"]} ${
          isGridView ? "" : classes.active
        }`}
        onClick={switchToListHandler}
      >
        <span>{text.header.viewSwitch.list}</span>
        <ListBulletIcon />
      </div>
      <div
        className={`${classes["switch--btn"]} ${
          isGridView ? classes.active : ""
        }`}
        onClick={switchToGridHandler}
      >
        <span>{text.header.viewSwitch.grid}</span>
        <Squares2X2Icon />
      </div>
    </div>
  );
};

export default ViewSwitch;
