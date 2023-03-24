import classes from "./Main.module.scss";

import Sidebar from "./Sidebar/Sidebar";

const Main: React.FC = () => {
  return (
    <main className={classes.main}>
      <Sidebar />
    </main>
  );
};

export default Main;
