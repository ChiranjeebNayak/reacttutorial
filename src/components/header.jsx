import React from 'react'
import Child from './child';
function Header() {
    let a = 20;
    
  return (
    <div>
        <h1>Header {a}</h1>
        <Child/>
    </div>
  )
}

export default Header