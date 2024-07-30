import React from 'react'
import {useContext} from 'react'
import { UserContext } from '../context/userContext'
function Comp3(props) {
  const user = useContext(UserContext)
  return (
    <div>
        <h3>Component - 3</h3>
            <p>Hi {user}</p>
    </div>
  )
}

export default Comp3