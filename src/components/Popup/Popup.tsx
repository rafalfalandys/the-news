import classes from "./Popup.module.scss";

import Modal from "../UI/Modal";
import useText from "../../hooks/useText";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const PopupWindow: React.FC = () => {
  const text = useText();
  const isModalVisible = useSelector(
    (state: RootState) => state.ui.isModalVisible
  );

  return (
    <Modal isVisible={isModalVisible}>
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
