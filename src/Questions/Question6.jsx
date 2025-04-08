import React, { useEffect, useState } from "react";

// Typing Indicator...
// Typing Indicator (Simulated API Response)
// Show "User is typing..." for 3 seconds after clicking an input field.
// Then, replace it with "Response received" after 2 more seconds.
const Question6 = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (message !== "User is typing...") return;
    const hideTypingTimer = setTimeout(() => {
      setMessage("");
      const responseTimer = setTimeout(() => {
        setMessage("Response is Recieved...");
      }, 3000);

      return () => clearTimeout(responseTimer);
    }, 5000);

    return () => clearTimeout(hideTypingTimer);
  }, [message]);
  return (
    <div>
      <input
        type="text"
        placeholder="Enter Some text..."
        onClick={() => setMessage("User is typing...")}
      />
      {message && <h1>{message}</h1>}
    </div>
  );
};

export default Question6;
