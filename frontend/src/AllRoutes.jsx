import React from 'react'
import { Routes, Route } from 'react-router-dom'
import About from './About.jsx'
import Homepage from './Homepage'
const AllRoutes = () => {
  return (
   <div>
       <Routes>
          <Route path = "/" element={<Homepage/>}/>
          <Route path = "/about" element={<About/>}/>
        </Routes>
   </div>
  )
}

export default AllRoutes
