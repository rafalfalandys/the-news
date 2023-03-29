import classes from "./Modal.module.scss";
import { Fragment, ReactNode } from "react";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { uiActions } from "../../store/ui-slice";

import useText from "../../hooks/useText";
import Btn from "./Btn";
import Overlay from "./Overlay";
import { CSSTransition, Transition } from "react-transition-group";

const Modal: React.FC<{ children: ReactNode; isVisible: boolean }> = (
  props
) => {
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

  const modal = (
    <Fragment>
      <Overlay onClick={hideModalHandler} showState={props.isVisible} />
      <CSSTransition
        in={props.isVisible}
        timeout={400}
        mountOnEnter
        unmountOnExit
        classNames={{
          enter: "",
          enterActive: classes.showing,
          exit: "",
          exitActive: classes.hiding,
          appear: "",
          appearActive: classes.showing,
        }}
      >
        <Fragment>
          <div className={classes.wrapper}>
            <div className={classes.modal}>
              {props.children}
              <Btn onClick={hideModalHandler}>{text.modal.btnClose}</Btn>
            </div>
          </div>
        </Fragment>
      </CSSTransition>
    </Fragment>
  );

  return <Fragment>{createPortal(modal, portalEl)}</Fragment>;
};

export default Modal;
