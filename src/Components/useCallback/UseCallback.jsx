import React from "react";
import { useState } from "react";
import ChildComponent from "./ChildComponent";

function UseCallback() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  return (
    <div>
      <h2>Count:- {count} </h2>
      <button onClick={handleClick}>Increment</button>

      <div>
        <ChildComponent name="Click me" />
      </div>
    </div>
  );
}

export default UseCallback;
