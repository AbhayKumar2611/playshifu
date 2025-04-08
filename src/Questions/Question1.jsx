import { useEffect, useState } from "react";

function Question1() {
  const [num, setNum] = useState(10);

  useEffect(() => {
    const Timer = setInterval(() => {
      if (num === 0) return;

      setNum((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(Timer);
  }, [num]);

  return (
    <div className="App">
      <h1>Count : {num}</h1>
      <button onClick={() => setNum(10)}>Reset</button>
    </div>
  );
}

export default Question1;
