import { List, SquaresFour } from "@phosphor-icons/react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { uiActions } from "../../store/ui-slice";
import classes from "./ViewSwitch.module.scss";

const ViewSwitch: React.FC = () => {
  const dispatch = useDispatch();

  // get current layout state and language
  const isGridView = useSelector((state: RootState) => state.ui.isGridView);
  const isEnglish = useSelector((state: RootState) => state.ui.isEnglish);

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
        {isEnglish && <span>List View</span>}
        {!isEnglish && <span>Lista</span>}
        <List weight="bold" />
      </div>
      <div
        className={`${classes["switch--btn"]} ${
          isGridView ? classes.active : ""
        }`}
        onClick={switchToGridHandler}
      >
        {isEnglish && <span>Grid view</span>}
        {!isEnglish && <span>Kafelki</span>}
        <SquaresFour weight="bold" />
      </div>
    </div>
  );
};

export default ViewSwitch;
