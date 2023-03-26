import { Fragment, ReactNode } from "react";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { RootState } from "../../store";
import { uiActions } from "../../store/ui-slice";
import classes from "./Modal.module.scss";

import Btn from "../UI/Btn";

const Modal: React.FC<{ children: ReactNode }> = (props) => {
  const portalEl = document.getElementById("overlays")!;
  const isEnglish = useSelector((state: RootState) => state.ui.isEnglish);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  // hide modal on clicking a button
  const hideModalHandler = () => {
    dispatch(uiActions.controlModal("hide"));
    if (params.articleDetails)
      navigate(`/country/${params.countryCode}`, { replace: true });
  };

  // handle 2 languages in button
  const closeText = isEnglish ? "Close" : "Zamknij";

  const popup = (
    <Fragment>
      <div className={classes.overlay} onClick={hideModalHandler}></div>
      <div className={classes.wrapper}>
        <div className={classes.modal}>
          {props.children}
          <Btn onClick={hideModalHandler}>{closeText}</Btn>
        </div>
      </div>
    </Fragment>
  );

  return <Fragment>{createPortal(popup, portalEl)}</Fragment>;
};

export default Modal;
