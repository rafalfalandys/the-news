import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../../store";
import { uiActions } from "../../store/ui-slice";
import classes from "./ToggleSidebarBtn.module.scss";

const ToggleSidebarBtn = () => {
  const dispatch = useDispatch();
  const isSidebarVisible = useSelector(
    (state: RootState) => state.ui.isSidebarVisible
  ); // handling sidebar visibility on phones
  const isModalVisible = useSelector(
    (state: RootState) => state.ui.isPopupVisible
  );
  const params = useParams();

  const onListToggleHandler = () => dispatch(uiActions.toggleSidebar());

  // disabling background scroll while modal window is open
  useEffect(() => {
    if (isSidebarVisible) document.body.style.overflow = "hidden";
    if (!isSidebarVisible) document.body.style.overflow = "unset";
  }, [isSidebarVisible]);

  return (
    <div
      className={`${classes["toggle-btn"]} ${
        isSidebarVisible ? "" : classes.rotated
      } ${params.articleDetails || isModalVisible ? classes.hidden : ""}`}
      onClick={onListToggleHandler}
    >
      <ChevronLeftIcon />
    </div>
  );
};

export default ToggleSidebarBtn;
