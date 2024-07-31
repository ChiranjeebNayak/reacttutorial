import { createStore } from "redux";

const reducer = (state = 0, action)=>{
    console.log(state);
    console.log(action);
    switch(action.type){
        case 'Increment' : return state + 1;
        case 'Decrement' : return state - 1;
    }

}
export const store = createStore(reducer);