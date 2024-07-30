import React from 'react'
import { Link } from 'react-router-dom'
import Header from './header'
function Nopage() {
  return (
    <div>
        <Header/>
        <h1>404 Page not found</h1>
        {/* <Link to="/">Home</Link> */}
    </div>
  )
}

export default Nopage