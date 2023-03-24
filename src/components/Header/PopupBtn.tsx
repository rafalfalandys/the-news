import { useEffect, useState } from "react";
import classes from "./PopupBtn.module.scss";

const PopupBtn: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const bump = setTimeout(() => {
      setIsActive(false);
    }, 1000);
    return () => clearTimeout(bump);
  }, [isActive]);

  return (
    <button
      className={`${classes.btn} ${isActive ? classes.active : ""}`}
      onClick={() => setIsActive(true)}
    >
      Popup
    </button>
  );
};

export default PopupBtn;
