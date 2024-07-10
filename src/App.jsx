import React from 'react' // rfce shortcut
import Header from './components/header';
import Footer from './components/footer';
import Content from './components/content';
function App() {
  let name = "Ram";
  let x = 25;
  return (
    <div>
      <Header/>
      <Content xyz = {name} abc = {x}/>
      <Footer/>
    </div>
  )
}

export default App;