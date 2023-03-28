import classes from "./LanguageSwitch.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { uiActions } from "../../store/ui-slice";

const LanguageSwitch: React.FC<{ className?: string }> = (props) => {
  const dispatch = useDispatch();
  const isEnglish = useSelector((state: RootState) => state.ui.isEnglish);

  const toggleLanguageHandler = () => dispatch(uiActions.toggleLanguage());

  return (
    <div
      className={`${classes.wrapper} ${props.className}`}
      onClick={toggleLanguageHandler}
    >
      <div className={`${classes.switch} ${isEnglish ? classes.active : ""}`}>
        <div
          className={`${classes.slider} ${
            // handle switch position
            isEnglish ? classes.right : classes.left
          } `}
        ></div>
      </div>
    </div>
  );
};

export default LanguageSwitch;
