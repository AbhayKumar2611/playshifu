import React, { useEffect, useState } from "react";

const Question2 = () => {
  const [num, setNum] = useState(20);
  const [running, setRunning] = useState(true);

  useEffect(() => {
    if (!running || num === 0) return;
    const Timer = setInterval(() => {
      setNum((prev) => (prev === 0 ? 0 : prev - 1));
    }, 1000);

    return () => clearInterval(Timer);
  }, [running, num]);

  return (
    <div>
      <h1>Countdown: {num}</h1>
      <button onClick={() => setRunning(false)}>Pause</button>
      <button onClick={() => setRunning(true)}>Start</button>
      <button
        onClick={() => {
          setNum(20);
          setRunning(true);
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default Question2;

// const arr = [1,2,[3,[4,[5,6],7],8],9]
// const arr = [[1,2],[3,4],[5,6],[7,[8,9]]]

// required output :- [1,2,3,4,5,6,7,8,9]
// [ 1, 2, 3, [ 4, [ 5, 6 ], 7 ], 8, 9 ]

// function flattenArray(arr){
//     return arr.reduce((acc,cv) =>
//         if(Array.isArray(cv)===true){
//             return acc.concat(flattenArray(cv))
//         }else{
//             return acc.concat(cv)
//         }
//         Array.isArray(cv) ? acc.concat(flattenArray(cv)) : acc.concat(cv)
//     ,[])
// }

// const newArr = flattenArray(arr)
// console.log(newArr)
