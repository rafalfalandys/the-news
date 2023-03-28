import classes from "./LoadingSpinner.module.scss";
import { Spinner } from "@phosphor-icons/react";

function LoadingSpinner() {
  return (
    <div className={classes.spinner}>
      <Spinner />
    </div>
  );
}

export default LoadingSpinner;
