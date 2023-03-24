import { List, SquaresFour } from "@phosphor-icons/react";
import classes from "./ViewSwitch.module.scss";

const ViewSwitch: React.FC = () => {
  return (
    <div className={classes["switch--wrapper"]}>
      <div className={classes["switch--btn"]}>
        <span>List View</span>
        <List weight="bold" />
      </div>
      <div className={`${classes["switch--btn"]} ${classes.active}`}>
        <span>Grid View</span>
        <SquaresFour weight="bold" />
      </div>
    </div>
  );
};

export default ViewSwitch;
