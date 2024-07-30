import React, { useEffect, useState } from 'react'
import axios from 'axios' 
function Apicall() {
    const [data, setData] = useState([]);
    const [count, setCount] = useState(0);
    const [counter, setCounter] = useState(0);
    const api = "https://jsonplaceholder.typicode.com/image/";
    // const getData = async() =>{
    //     console.log("calling api");
    //     const response = await axios.get(api); // fetch data according to requestbody
    //     setData(response.data)
    //     // setCount(count+1);
    // }
    // const getDataCount = async() =>{
    //     console.log(`calling api ${count}`);
    //     const response = await axios.get(api); // fetch data according to requestbody
    //     setData(response.data)
    //     // setCount(count+1);
    // }
    // // getData();
    // useEffect(()=>{
    //     getData();
    // },[])
    useEffect(()=>{
        console.log("Am i infinite ?")
        // setCounter(counter+1)
    },[counter])
  return (
    <div>
        <button onClick={()=>setCount(count+1)}>Count {count}</button>
        <button onClick={()=>setCounter(counter+1)}>Counter {counter}</button>
        {/* <ol>
            {
                data.map((xyz,index) =>{
                    return <li key={index}>{xyz.title} {xyz.userId}</li>
                })
            }
        </ol> */}

    </div>
  )
}

export default Apicall