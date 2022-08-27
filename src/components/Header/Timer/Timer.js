import React from "react";
import "./Timer.css";
import { useStopwatch } from "react-timer-hook";

const Timer = () => {
  const { seconds, minutes, hours } = useStopwatch({ autoStart: true });
  return (
    <div>
      <span>{hours}H</span>: <span>{minutes} Min</span>: <span>{seconds}s</span>
    </div>
  );
};

export default Timer;
