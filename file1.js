import React, { useState } from "react";
import ReactDOM from "react-dom/client";

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Simple React Template</h1>
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
