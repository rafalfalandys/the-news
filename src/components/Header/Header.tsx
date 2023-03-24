import classes from "./Header.module.scss";

import Logo from "./Logo";
import ViewSwitch from "./ViewSwitch";
import PopupBtn from "./PopupBtn";
import LanguageSwitch from "./LanguageSwitch";

const Header: React.FC = () => {
  return (
    <div className={classes.wrapper}>
      <header className={classes.header}>
        <Logo />
        <div className={classes.buttons}>
          <ViewSwitch />
          <PopupBtn>Popup</PopupBtn>
          <LanguageSwitch />
        </div>
      </header>
    </div>
  );
};

export default Header;
