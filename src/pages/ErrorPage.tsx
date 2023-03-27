import { Fragment } from "react";
import Header from "../components/Header/Header";
import useText from "../hooks/useText";
import classes from "./ErrorPage.module.scss";

const ErrorPage: React.FC = () => {
  const text = useText();
  return (
    <Fragment>
      <Header />
      <div className={classes.wrapper}>
        <h1 className={classes.header}>{text.error.header}</h1>
        <p>{text.error.msg}</p>
      </div>
    </Fragment>
  );
};

export default ErrorPage;
