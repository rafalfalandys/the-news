import { MouseEventHandler } from "react";
import { Transition } from "react-transition-group";
import classes from "./Overlay.module.scss";

const Overlay: React.FC<{
  onClick: MouseEventHandler;
  showState: boolean;
  className?: string;
}> = (props) => {
  return (
    <Transition in={props.showState} timeout={400} mountOnEnter unmountOnExit>
      {(state) => (
        <div
          className={`${`${classes.overlay} ${props.className}`} ${
            state === "entering"
              ? classes.showing
              : state === "exiting"
              ? classes.hiding
              : ""
          }`}
          onClick={props.onClick}
        ></div>
      )}
    </Transition>
  );
};

export default Overlay;
