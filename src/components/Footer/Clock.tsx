import classes from "./Clock.module.scss";
import { useEffect, useState } from "react";

import { ClockAfternoon } from "@phosphor-icons/react";

const Clock: React.FC = () => {
  const [time, setTime] = useState(new Date());

  // count seconds
  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);

  const hour = (time.getHours() + "").padStart(2, "0");
  const minute = (time.getMinutes() + "").padStart(2, "0");

  return (
    <div className={classes.wrapper}>
      <div className={classes.clock}>
        <ClockAfternoon />
        <span className={classes.hours}>{hour}</span>:
        <span className={classes.minutes}>{minute}</span>
      </div>
    </div>
  );
};

export default Clock;
