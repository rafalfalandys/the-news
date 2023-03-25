import { Fragment } from "react";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { uiActions } from "../../store/ui-slice";
import Btn from "../UI/Btn";
import Overlay from "../UI/Overlay";
import classes from "./PopupWindow.module.scss";

const PopupWindow: React.FC = () => {
  const portalEl = document.getElementById("overlays")!;
  const isEnglish = useSelector((state: RootState) => state.ui.isEnglish);
  const dispatch = useDispatch();

  // hide modal handler for button
  const hideModalHandler = () => dispatch(uiActions.controlModal("hide"));

  // handle 2 languages
  const headerText = isEnglish ? "Breaking news!" : "Z ostatniej chwili!";
  const headerCons = isEnglish
    ? "I struggled the most with:"
    : "Najwięcej problemów miałem z:";
  const headerPros = isEnglish
    ? "I had the most fun when:"
    : "Najlepiej bawiłem się gdy:";
  const textCons = isEnglish
    ? "Believe it or not, but what I have been struggling the most with were bloody icons."
    : "Wierzcie lub nie, ale najwięceej czasu (jak zwykle) spędziłem na znalezieniu działących ikon";
  const textPros = isEnglish
    ? "When I finally found the right ones!"
    : "W końcu zadziałały!";
  const closeText = isEnglish ? "Close" : "Zamknij";

  const popup = (
    <Fragment>
      <Overlay />
      <div className={classes.wrapper}>
        <div className={classes.modal}>
          <h1>{headerText}</h1>
          <h2>{headerCons}</h2>
          <p>{textCons} </p>
          <h2>{headerPros}</h2>
          <p>{textPros} </p>
          <Btn onClick={hideModalHandler}>{closeText}</Btn>
        </div>
      </div>
    </Fragment>
  );

  return <Fragment>{createPortal(popup, portalEl)}</Fragment>;
};

export default PopupWindow;
