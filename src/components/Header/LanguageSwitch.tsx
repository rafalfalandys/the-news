import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { uiActions } from "../../store/ui-slice";
import classes from "./LanguageSwitch.module.scss";

const LanguageSwitch: React.FC<{ className?: string }> = (props) => {
  const dispatch = useDispatch();

  // get app language state
  const isEnglish = useSelector((state: RootState) => state.ui.isEnglish);

  // toggle language handler
  const toggleLanguageHandler = () => dispatch(uiActions.toggleLanguage());

  return (
    <div
      className={`${classes.wrapper} ${props.className}`}
      onClick={toggleLanguageHandler}
    >
      <div className={`${classes.switch} ${isEnglish ? classes.active : ""}`}>
        <div
          className={`${classes.slider} ${
            isEnglish ? classes.right : classes.left
          } `}
        ></div>
      </div>
    </div>
  );
};

export default LanguageSwitch;
