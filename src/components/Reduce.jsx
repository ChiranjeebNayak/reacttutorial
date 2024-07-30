import { useReducer, useState } from 'react';

const initialState = {age: 10};
// function reducer(state, action) {
//   console.log(JSON.stringify(state));
//   console.log(JSON.stringify(action));
//   if (action.type === 'incremented_age') {
//     return {
//       age: state.age + 1
//     };
//   }
// }

function Reducer() {
  // const [state, dispatch] = useReducer(reducer, initialState);
  const [age, setAge] = useState(0)
  return (
    <>
      {/* <button onClick={() => {
        dispatch({ type: 'incremented_age' })
      }}>
        Increment age
      </button> */}
  <button onClick={() => setAge(age + 1)}> Increment age</button>
      <p>Hello! You are {age}.</p>
    </>
  );
}

export default Reducer