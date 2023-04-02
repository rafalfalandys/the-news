import classes from "./ViewSwitch.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { uiActions } from "../../store/ui-slice";
import { ListBulletIcon, Squares2X2Icon } from "@heroicons/react/24/outline";
import useText from "../../hooks/useText";
import TextAndIcon from "../UI/TextAndIcon";

const ViewSwitch: React.FC = () => {
  const dispatch = useDispatch();
  const text = useText();

  // get current layout state
  const isGridView = useSelector((state: RootState) => state.ui.isGridView);

  // layout control handlers
  const switchToGridHandler = () => dispatch(uiActions.controlLayout("grid"));
  const switchToListHandler = () => dispatch(uiActions.controlLayout("list"));

  return (
    <div className={classes.wrapper} aria-label="list/grid switch">
      <TextAndIcon isActive={!isGridView} onClick={switchToListHandler}>
        <span>{text.header.viewSwitch.list}</span>
        <ListBulletIcon />
      </TextAndIcon>

      <TextAndIcon isActive={isGridView} onClick={switchToGridHandler}>
        <span>{text.header.viewSwitch.grid}</span>
        <Squares2X2Icon />
      </TextAndIcon>
    </div>
  );
};

export default ViewSwitch;
