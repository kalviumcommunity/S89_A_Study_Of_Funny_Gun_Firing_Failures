import { useState } from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import AllRoutes from './AllRoutes'
import Navbar from './components/Navbar'
import FunnyGunFailures from './components/FunnyGunFailures';

function App() {


  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <AllRoutes/>
      <FunnyGunFailures/>
      </BrowserRouter>
    </>
  )
}

export default App
