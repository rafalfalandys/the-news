import classes from "./Btn.module.scss";
import { ReactNode } from "react";

const Btn: React.FC<{
  children: ReactNode;
  onClick?: () => any;
  className?: string;
}> = (props) => {
  return (
    <button
      className={`${classes.btn} ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Btn;
