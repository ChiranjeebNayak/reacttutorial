import React, { useRef } from 'react'

function Refdom() {
    const focuspoint = useRef();
    console.log("focuspoint = "+ JSON.stringify(focuspoint));
    const oncLClickfocus = () =>{
        focuspoint.current.value = "Hey Ram !!";
        // focuspoint.current.focus();
    }
  return (
    <div>
        <textarea ref={focuspoint}></textarea>
        <div>
            <button onClick={oncLClickfocus}>FOCUS</button>
        </div>
    </div>
  )
}

export default Refdom