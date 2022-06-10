import React from "react";
import { useEffect } from "react";

const Timer = ({ shouldStart, shouldStop,  seconds, setSeconds, minutes, setMinutes}) => {

  useEffect(() => {
    if (shouldStart && !shouldStop) {
      let myInterval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        }
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(myInterval);
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        }
      }, 1000);
      return () => {
        clearInterval(myInterval);
      };
    }
  }, [shouldStart, shouldStop, seconds, minutes]);

  return (
    <div className="mt-3">
      <h1 className="font-bold text-4xl tracking-wider">
        {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      </h1>
    </div>
  );
};

export default Timer;
