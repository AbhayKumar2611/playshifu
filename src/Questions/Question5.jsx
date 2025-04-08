import React, { useEffect, useState } from "react";

// Auto-Hide Notification...
const Question5 = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    if (!text) return;

    const timer = setTimeout(() => {
      setText("");
    }, 5000);

    return () => clearTimeout(timer);
  }, [text]);

  return (
    <div>
      {text && <h1>{text}</h1>}
      <button onClick={() => setText("Success! Data Saved.")}>
        Show Message
      </button>
    </div>
  );
};

export default Question5;
