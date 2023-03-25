import classes from "./Footer.module.scss";
import Clock from "./Clock";

const Footer: React.FC = () => {
  return (
    <div className={classes.wrapper}>
      <footer className={classes.footer}>
        <Clock />
      </footer>
    </div>
  );
};

export default Footer;
