import React, { useEffect, useState } from "react";

const Question4 = () => {
  const [incrementCount, setIncrementCount] = useState(0);
  const [decrementCount, setDecrementCount] = useState(10);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;
    const timer = setInterval(() => {
      setIncrementCount((prev) => (prev < 10 ? prev + 1 : prev));
      setDecrementCount((prev) => {
        if (prev === 1) {
          clearInterval(timer);
          setRunning(false);
        }
        return prev > 0 ? prev - 1 : prev;
      });
    }, 1000);

    if (decrementCount === 0) {
      clearInterval(timer);
      setRunning(false);
    }

    return () => clearInterval(timer);
  }, [running]);
  return (
    <div>
      <h1>Count1: {decrementCount}</h1>
      <h1>Count2: {incrementCount}</h1>
      <button onClick={() => setRunning(true)}>Start</button>
      <button onClick={() => setRunning(false)}>Pause</button>
      <button
        onClick={() => {
          setRunning(false);
          setIncrementCount(0);
          setDecrementCount(10);
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default Question4;
