import React, { useEffect, useState } from "react";

const Question10 = () => {
  const [count, setCount] = useState(10);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    const Interval = setInterval(() => {
      setCount((prev) => {
        if (prev === 0) return prev;
        else {
          // setRunning(true);
          return prev - 1;
        }
      });
    }, 1000);

    return () => clearInterval(Interval);
  }, [count]);
  return (
    <div>
      <h1>Coundown : {count}</h1>
      <button
        onClick={() => {
          setCount(10);
          // setRunning(false);
        }}
      >
        Reset
      </button>
      {count === 0 && <h1> Coundown is Stopped</h1>}
    </div>
  );
};

export default Question10;
