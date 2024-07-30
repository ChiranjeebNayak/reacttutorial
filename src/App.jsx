import React, { useState } from 'react' // rfce shortcut
import Header from './components/header';
import Footer from './components/footer';
import Content from './components/content';
import Showroom from './components/showroom';
import Conditional from './components/conditional';
import Demo from './components/demo';
import '../src/components/Demo.css';
import Comp1 from './components/Comp1';
import { createContext } from 'react';
import {UserContext} from './context/userContext'
import Counter from './components/Counter';
import Apicall from './components/Apicall';
import Memo from './components/Memo'
import Ref from './components/Ref';
import Refdom from './components/Refdom';
import About from './components/About';
import Contact from './components/Contact';
import { Route, Routes } from 'react-router-dom';
import Nopage from './components/Nopage';
import Home from './components/home';
import Reduce from './components/Reduce';
function App() {
  return (
    // <Routes >
    //   <Route path='/' element={<Home/>}/>
    //   <Route path='/about' element={<About/>}/>
    //   <Route path='/contact' element={<Contact/>}/>
    //   <Route path='*' element={<Nopage/>}/>
    // </Routes>
    <Reduce/>
  )
}

export default App;