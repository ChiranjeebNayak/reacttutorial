import React, { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(0)
  const counthandle = () => {
    setCount(count+1);
  };
  const datahandle = () => {
    setData(data + 1);
  };

//   [] - whole component (mounting)
  useEffect(()=>{
    console.log("Component mounted");

    return function(){
        console.log("Component ummounted");
    }
  },[]) // [dependencies]

  useEffect(()=>{
    console.log("Component Updated count")
  },[count]) 
  useEffect(()=>{
    console.log("Component Updated data")
  },[data]) 
  useEffect(()=>{
    console.log("Either count or data updated")
  },[count,data])
  

  return (
    <div>
      <button onClick={counthandle}> Count {count}</button>
      <button onClick={datahandle}> Data {data} </button>
    </div>
  );
}

export default Counter;
