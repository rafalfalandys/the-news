import { useEffect, useState, ReactNode } from "react";
import classes from "./Btn.module.scss";

const Btn: React.FC<{
  children: ReactNode;
  onClick?: () => any;
  className?: string;
}> = (props) => {
  const [isActive, setIsActive] = useState(false);

  // bump effect after click
  useEffect(() => {
    const bump = setTimeout(() => {
      setIsActive(false);
    }, 300);
    return () => clearTimeout(bump);
  }, [isActive]);

  return (
    <button
      className={`${classes.btn} ${isActive ? classes.active : ""} ${
        props.className
      }`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Btn;
