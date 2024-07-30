import { useReducer, useState } from "react";

const initialState = { age: 10 };
function reducer(state, action) {
  console.log(JSON.stringify(state));
  console.log(JSON.stringify(action));
  if (action.type === "age_badhao") {
    return {
      age: state.age + 1,
    };
  }
  if (action.type === "age_kamao") {
    return {
      age: state.age - 1,
    };
  }
}

function Reducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  // const [age, setAge] = useState(0)
  return (
    <>
      <button
        onClick={() => {
          dispatch({ type: "age_badhao" });
        }}
      >
        Increment age
      </button>

      <button
        onClick={() => {
          dispatch({ type: "age_kamao" });
        }}
      >
        Decrement age
      </button>
      {/* <button onClick={() => setAge(age + 1)}> Increment age</button> */}
      <p>Hello! You are {state.age}.</p>
    </>
  );
}

export default Reducer;
