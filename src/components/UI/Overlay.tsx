import { MouseEventHandler } from "react";
import { CSSTransition } from "react-transition-group";
import classes from "./Overlay.module.scss";

const Overlay: React.FC<{
  onClick: MouseEventHandler;
  showState: boolean;
  className?: string;
}> = (props) => {
  return (
    // need to use css transition to animate article modal on entering its route
    <CSSTransition
      in={props.showState}
      timeout={300}
      mountOnEnter
      unmountOnExit
      appear={true}
      classNames={{
        enter: classes["fade-enter"],
        enterActive: classes["fade-enter-active"],
        exitActive: classes["fade-exit-active"],
        exit: classes["fade-exit"],
        appear: classes["fade-enter"],
        appearActive: classes["fade-enter-active"],
      }}
    >
      <div
        className={`${classes.overlay} ${props.className}`}
        onClick={props.onClick}
      ></div>
    </CSSTransition>
  );
};

export default Overlay;
