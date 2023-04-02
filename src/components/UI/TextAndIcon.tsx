import { ReactNode } from "react";
import classes from "./TextAndIcon.module.scss";

const TextAndIcon: React.FC<{
  children: ReactNode | ReactNode[];
  onClick?: () => {};
  isActive?: boolean;
}> = ({ children, onClick, isActive = true }) => {
  return (
    <div
      className={`${classes.wrapper} ${isActive ? "" : classes.faded}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default TextAndIcon;
