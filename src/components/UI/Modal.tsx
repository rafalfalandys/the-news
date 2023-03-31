import classes from "./Modal.module.scss";
import { Fragment, ReactNode } from "react";
import { createPortal } from "react-dom";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { uiActions } from "../../store/ui-slice";

import useText from "../../hooks/useText";
import Btn from "./Btn";
import Overlay from "./Overlay";
import { CSSTransition } from "react-transition-group";

const Modal: React.FC<{
  children: ReactNode;
  isVisible: boolean;
  curScroll?: number;
}> = (props) => {
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
        timeout={300}
        mountOnEnter
        unmountOnExit
        appear={true}
        classNames={{
          enter: classes["slide-enter"],
          enterActive: classes["slide-enter-active"],
          exitActive: classes["slide-exit-active"],
          exit: classes["slide-exit"],
          appear: classes["slide-enter"],
          appearActive: classes["slide-enter-active"],
        }}
      >
        <Fragment>
          <div
            className={classes.wrapper}
            style={{
              top: `calc(${props.curScroll}px + 50%)`,
            }}
          >
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
