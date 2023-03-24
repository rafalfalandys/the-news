import classes from "./Header.module.scss";
import LanguageSwitch from "./LanguageSwitch";
import Logo from "./Logo";
import PopupBtn from "./PopupBtn";
import ViewSwitch from "./ViewSwitch";

const Header: React.FC = () => {
  return (
    <div className={classes.wrapper}>
      <header className={classes.header}>
        <Logo />
        <div className={classes.buttons}>
          <ViewSwitch />
          <PopupBtn />
          <LanguageSwitch />
        </div>
      </header>
    </div>
  );
};

export default Header;
