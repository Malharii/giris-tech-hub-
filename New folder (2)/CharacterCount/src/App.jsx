import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");

  return (
    <div className="app">
      <h1>Character Count</h1>

      <input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <p>Characters typed: {text.length}</p>

      {text.length > 50 && (
        <p style={{ color: "red" }}>⚠️ Character limit exceeded (max 50)!</p>
      )}
    </div>
  );
}

export default App;
