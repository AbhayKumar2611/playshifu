import React, { useState } from "react";

const Question9 = () => {
  // const [display, setDisplay] = useState(false);
  const [text, setText] = useState("");

  return (
    <div>
      {text && <h1>Text : {text}</h1>}
      <button onClick={() => setText("Welcome to masai")}>Home1</button>
      <button onClick={() => setText("please do not come")}>Home2</button>
    </div>
  );
};

export default Question9;
