import classes from "./LanguageSwitch.module.scss";

function LanguageSwitch() {
  const isEnglish = false;
  const toggleLanguage = () => {};

  const toggleLanguageHandler = () => toggleLanguage();

  return (
    <div className={classes.wrapper} onClick={toggleLanguageHandler}>
      <div className={`${classes.switch} ${isEnglish ? classes.active : ""}`}>
        <div
          className={`${classes.slider} ${
            isEnglish ? classes.right : classes.left
          } `}
        ></div>
      </div>
    </div>
  );
}

export default LanguageSwitch;
