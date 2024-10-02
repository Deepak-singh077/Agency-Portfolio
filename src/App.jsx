import React, { useEffect } from 'react'
import './App.css'
import Nav from './components/Nav.jsx'
import Home from './components/Home.jsx'
import Page3 from './components/Page3.jsx';
import Page1 from './components/Page1.jsx';
import Lenis from 'lenis';
function App() {
  useEffect(()=>{
    const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
  })

  return (
    <>
   <Nav/>
   <Page1/>
    <Home/>
    <Page3/>
    </>
  )
}

export default App
