import React from 'react' // rfce shortcut
import Header from './components/header';
import Footer from './components/footer';
import Content from './components/content';
import Showroom from './components/showroom';
import Conditional from './components/conditional';
import Demo from './components/demo';
import '../src/components/Demo.css';
function App() {
  let name = "Ram";
  let x = 25;
  return (
    <div>
      <Demo/>
    </div>
  )
}

export default App;