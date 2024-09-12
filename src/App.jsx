import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './assets/Header';
import Body from './assets/Body';
import "./App.css"
import Projects from './assets/Projects';
import Certificate from './assets/Certificate';
import Contactus from './assets/Contactus';
import About from './assets/About';
import Home from './assets/Hero';
function App() {
  return (
    <div className='bg-light'>
      <Header></Header>
      <Home />
      <About />
      <Projects />
      <Certificate />
      <Contactus></Contactus>
    </div>
  )
}

export default App
