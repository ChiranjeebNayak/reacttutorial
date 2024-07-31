import React from "react";
import Count from "./Count";
import { useDispatch } from "react-redux";
function ReduxCounter() {
    const dispatch = useDispatch();
  return (
    <div>
      <h1>Redux Tutorial</h1>
      <button onClick={() => dispatch({type: "Increment"})}>Increment</button>
      <Count />
      <button onClick={() => dispatch({type: "crement"})}>Decrement</button>
    </div>
  );
}

export default ReduxCounter;
