import { Spinner } from "@phosphor-icons/react";
import classes from "./LoadingSpinner.module.scss";

function LoadingSpinner() {
  return (
    <div className={classes.spinner}>
      <Spinner />
    </div>
  );
}

export default LoadingSpinner;
