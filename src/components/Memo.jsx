// Filename - App.js

import React, { useState, useMemo } from "react";

function Memo() {
    
	const [number, setNumber] = useState(1);
    const [counter, setCounter] = useState(0);
	// const squaredNum = squareNum(number);
    const squaredNum = useMemo(() => {
        return squareNum(number);
    }, [number,counter]);

    
	// Change the state to the input
	const onChangeHandler = (e) => {
		setNumber(e.target.value);
	};

	// Increases the counter by 1
	const counterHander = () => {
		setCounter(counter + 1);
	};
	return (
		<div>
			<input
				type="number"
				placeholder="Enter a number"
				value={number}
				onChange={onChangeHandler}
			></input>

			<div>OUTPUT: {squaredNum}</div>
			<button onClick={counterHander}>
				Counter ++
			</button>
			<div>Counter : {counter}</div>
		</div>
	);
}

// expensive function  we need to pay per function call
const  squareNum = (number) => {
    console.log(`Square func calling ! ${number}`);
    return Math.pow(number, 2);
}

export default Memo;
