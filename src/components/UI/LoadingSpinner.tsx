import classes from "./LoadingSpinner.module.scss";
import { ArrowPathIcon } from "@heroicons/react/24/outline";

function LoadingSpinner() {
  return (
    <div className={classes.spinner}>
      <ArrowPathIcon />
    </div>
  );
}

export default LoadingSpinner;
