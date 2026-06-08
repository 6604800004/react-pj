import React, { useState, useMemo } from "react";

function TestUseMemo() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const expensiveValue = () => {
    console.log("Calculating expensive value...");
    let sum = 0;
    for (let i = 0; i < 1000000000; i++) {
      sum += i;
    }
    return sum;
  };
  const result = expensiveValue();

  return (
    <div>
      <h1>Expensive Value: {result}</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <div>
        <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type here"
      />
      </div>
    </div>
  );
}
export default TestUseMemo;