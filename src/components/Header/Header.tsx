import classes from "./Header.module.scss";

import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import { useParams } from "react-router-dom";

import Logo from "./Logo";
import ViewSwitch from "./ViewSwitch";
import Btn from "../UI/Btn";
import LanguageSwitch from "./LanguageSwitch";
import useText from "../../hooks/useText";

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const text = useText();

  const showPopupHandler = () => dispatch(uiActions.controlModal("show"));

  return (
    <div className={classes.wrapper}>
      <header className={classes.header}>
        <Logo />
        <div className={classes.buttons}>
          {/* only display view switch when articles are loaded */}
          {params.countryCode && <ViewSwitch />}
          <Btn onClick={showPopupHandler} className={classes["btn-popup"]}>
            {text.header.popupBtn}
          </Btn>
          <LanguageSwitch className={classes["lang-switch"]} />
        </div>
      </header>
    </div>
  );
};

export default Header;
