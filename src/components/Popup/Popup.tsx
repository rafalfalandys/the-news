import classes from "./Popup.module.scss";

import Modal from "../UI/Modal";
import useText from "../../hooks/useText";

const PopupWindow: React.FC = () => {
  const text = useText();

  return (
    <Modal>
      <div className={classes.content}>
        <h1>{text.popup.headerMain}</h1>
        <h2>{text.popup.headerCons}</h2>
        <p>{text.popup.textCons} </p>
        <h2>{text.popup.headerPros}</h2>
        <p>{text.popup.textPros} </p>
      </div>
    </Modal>
  );
};

export default PopupWindow;
