import { ReactNode } from "react";
import classes from "./TextAndIcon.module.scss";

const TextAndIcon: React.FC<{
  children: ReactNode | ReactNode[];
  onClick?: () => void;
  isActive?: boolean;
  bump?: boolean;
}> = ({ children, onClick, isActive = true, bump = false }) => {
  return (
    <div
      className={`${classes.wrapper} ${isActive ? "" : classes.faded} ${
        bump ? classes.bump : ""
      }`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default TextAndIcon;
