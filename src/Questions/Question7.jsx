import React, { useEffect, useState } from "react";

const Question7 = () => {
  const [num, setNum] = useState(0);
  const [running, setRunning] = useState(false);

  const handleCount = () => {
    setRunning(!running);
  };
  useEffect(() => {
    if (!running) return;

    const interval = setInterval(() => {
      setNum((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [running]);
  return (
    <div>
      <h1>Count : {num}</h1>
      <button onClick={handleCount}>{!running ? "Start" : "Stop"}</button>
      <button
        onClick={() => {
          setNum(0);
          setRunning(false);
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default Question7;
