import classes from "./Header.module.scss";

import Logo from "./Logo";
import ViewSwitch from "./ViewSwitch";
import Btn from "../UI/Btn";
import LanguageSwitch from "./LanguageSwitch";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";

const Header: React.FC = () => {
  const dispatch = useDispatch();

  // clicking on btn triggers this handler which changes state of modal visibility
  const showPopupHandler = () => dispatch(uiActions.controlModal("show"));

  return (
    <div className={classes.wrapper}>
      <header className={classes.header}>
        <Logo />
        <div className={classes.buttons}>
          <ViewSwitch />
          <Btn onClick={showPopupHandler}>Popup</Btn>
          <LanguageSwitch />
        </div>
      </header>
    </div>
  );
};

export default Header;
