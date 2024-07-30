import React, { useEffect, useRef, useState } from 'react'

function Ref() {
    const [input,setInput] = useState("");
    // const [count,setCount] = useState();
    const count = useRef(0);
    console.log("useRef count = "+ JSON.stringify(count));

    const inputHandler = (e) =>{
        setInput(e.target.value);
    }
    console.log("before useeffet call  = " + JSON.stringify(count));
    useEffect(() =>{

        console.log("I am in useEffect")
        // setCount(count+1);
        console.log(`${input} ${input.length}`)
        count.current = input.length;
        console.log("after useeffet done  = " + JSON.stringify(count));
    },[input])

  return (
    <>
        <form>
            <input
            type='text'
            onChange={inputHandler}
            >
            </input>
            <p>Count = {count.current}</p>
            {/* <p>count = {count.current}</p> */}
        </form>
        
    </>
  )
}

export default Ref