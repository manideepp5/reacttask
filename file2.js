import React, { useState } from "react";
import ReactDOM from "react-dom/client";

function App() {
  const [showMessage, setShowMessage] = useState(true);

  const toggleMessage = () => {
    setShowMessage(prev => !prev);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>Hello React!</h2>
      {showMessage && <p>Welcome to your simple React app.</p>}
      <button onClick={toggleMessage}>
        {showMessage ? "Hide" : "Show"} Message
      </button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
