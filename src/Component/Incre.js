import React, { useState } from "react";
import "./Incre.css";
export default function Incre() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <div>
        <pre>
          <button
            className="btn"
            onClick={() => setCounter((prev) => prev + 1)}
          >
            Click to increment
          </button>
          <button
            className="btn"
            onClick={() => setCounter((prev) => prev - 1)}
          >
            Click to decrement
          </button>
        </pre>
        <h1>{counter}</h1>
      </div>
    </div>
  );
}
