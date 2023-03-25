import { RootState } from "../../store";
import { useSelector } from "react-redux";
import classes from "./Popup.module.scss";

import Modal from "../UI/Modal";

const PopupWindow: React.FC = () => {
  const isEnglish = useSelector((state: RootState) => state.ui.isEnglish);

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

  return (
    <Modal>
      <div className={classes.content}>
        <h1>{headerText}</h1>
        <h2>{headerCons}</h2>
        <p>{textCons} </p>
        <h2>{headerPros}</h2>
        <p>{textPros} </p>
      </div>
    </Modal>
  );
};

export default PopupWindow;
