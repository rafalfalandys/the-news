import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { uiActions } from "../../store/ui-slice";
import classes from "./Overlay.module.scss";

const Overlay: React.FC = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();

  const hidePopupHandler = () => {
    dispatch(uiActions.controlModal("hide"));
    if (params.articleDetails) navigate(-1);
  };

  return <div className={classes.overlay} onClick={hidePopupHandler}></div>;
};

export default Overlay;
