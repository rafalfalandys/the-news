import { Fragment, ReactNode } from "react";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { RootState } from "../../store";
import { uiActions } from "../../store/ui-slice";
import classes from "./Modal.module.scss";

import Btn from "../UI/Btn";
import useQuery from "../../hooks/useQuery";

const Modal: React.FC<{ children: ReactNode }> = (props) => {
  const portalEl = document.getElementById("overlays")!;
  const isEnglish = useSelector((state: RootState) => state.ui.isEnglish);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const buildQuery = useQuery();

  // hide modal on clicking a button
  const hideModalHandler = () => {
    dispatch(uiActions.controlModal("hide"));
    if (params.articleDetails)
      navigate(buildQuery(params.countryCode!), {
        replace: true,
      });
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
