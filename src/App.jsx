import { useState } from 'react'
import Intro from './components/Intro.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import './App.css'

function App() {

  return (
    <>
      <Navbar />
      <Intro />
      <Footer />
    </>
  )
}

export default App
