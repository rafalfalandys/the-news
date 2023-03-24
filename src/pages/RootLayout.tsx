import { Fragment } from "react";
import { Outlet } from "react-router-dom";

const RootLayout: React.FC = () => {
  return (
    <Fragment>
      <Outlet />
    </Fragment>
  );
};

export default RootLayout;
