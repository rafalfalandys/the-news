import classes from "./ViewSwitch.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { uiActions } from "../../store/ui-slice";
import { List, SquaresFour } from "@phosphor-icons/react";
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
    <div className={classes["switch--wrapper"]}>
      <div
        className={`${classes["switch--btn"]} ${
          isGridView ? "" : classes.active
        }`}
        onClick={switchToListHandler}
      >
        <span>{text.header.viewSwitch.list}</span>
        <List weight="bold" />
      </div>
      <div
        className={`${classes["switch--btn"]} ${
          isGridView ? classes.active : ""
        }`}
        onClick={switchToGridHandler}
      >
        <span>{text.header.viewSwitch.grid}</span>
        <SquaresFour weight="bold" />
      </div>
    </div>
  );
};

export default ViewSwitch;
