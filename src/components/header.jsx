import React from 'react'
import {Link} from 'react-router-dom'
function Header() {
  return (
    <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/Contact"> Contact </Link></li>
        </ul>
    </div>
  )
}

export default Header