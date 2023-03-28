import { Fragment, ReactNode } from "react";
import { createPortal } from "react-dom";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { uiActions } from "../../store/ui-slice";
import classes from "./Modal.module.scss";

import Btn from "../UI/Btn";
import useQuery from "../../hooks/useQuery";
import useText from "../../hooks/useText";

const Modal: React.FC<{ children: ReactNode }> = (props) => {
  const portalEl = document.getElementById("overlays")!;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const text = useText();

  // hide modal on clicking a button
  const hideModalHandler = () => {
    dispatch(uiActions.controlModal("hide"));
    if (params.articleDetails) navigate(-1);
  };

  const popup = (
    <Fragment>
      <div className={classes.overlay} onClick={hideModalHandler}></div>
      <div className={classes.wrapper}>
        <div className={classes.modal}>
          {props.children}
          <Btn onClick={hideModalHandler}>{text.modal.btnClose}</Btn>
        </div>
      </div>
    </Fragment>
  );

  return <Fragment>{createPortal(popup, portalEl)}</Fragment>;
};

export default Modal;
