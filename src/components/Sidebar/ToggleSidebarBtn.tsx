import { CaretLeft } from "@phosphor-icons/react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { uiActions } from "../../store/ui-slice";
import classes from "./ToggleSidebarBtn.module.scss";

const ToggleSidebarBtn = () => {
  const dispatch = useDispatch();
  const isSidebarVisible = useSelector(
    (state: RootState) => state.ui.isSidebarVisible
  ); // handling sidebar visibility on phones

  const onListToggleHandler = () => dispatch(uiActions.toggleSidebar());

  return (
    <div
      className={`${classes["toggle-btn"]} ${
        isSidebarVisible ? "" : classes.rotated
      }`}
      onClick={onListToggleHandler}
    >
      <CaretLeft />
    </div>
  );
};

export default ToggleSidebarBtn;
