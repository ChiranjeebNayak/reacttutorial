import React from 'react'
import Header from './header'
import { useNavigate } from 'react-router-dom'

function About() {
  const navigate = useNavigate();
  const forward = () =>{
    navigate("/contact");
  }
  return (
    <div>
      <Header/>
        <h1>About</h1>
        <button onClick={forward}>Navigate me</button>
    </div>
  )
}

export default About