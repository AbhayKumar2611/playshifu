import React, { useEffect, useState } from "react";

const Question3 = () => {
  const [count, setCount] = useState(0);
  const [running, setRunning] = useState(false);
  useEffect(() => {
    if (!running) return;
    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev === 10) {
          clearInterval(timer);
          return prev;
        }
        return prev + 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [running]);
  return (
    <div>
      <h1>Countdown: {count}</h1>
      <button onClick={() => setRunning(true)}>Start</button>
      <button onClick={() => setRunning(false)}>Pause</button>
      <button
        onClick={() => {
          setCount(0);
          setRunning(false);
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default Question3;
