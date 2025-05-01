import React from 'react'
import { Routes, Route } from 'react-router-dom'
import About from './About.jsx'
import Homepage from './Homepage'
import FunnyGunFailures from './components/FunnyGunFailures.jsx'
import AddForm from './AddForm.jsx' 
import UpdateForm from './components/UpdateForm.jsx'
const AllRoutes = () => {
  return (
   <div>
       <Routes>
          <Route path = "/" element={<FunnyGunFailures/>}/>
          <Route path = "/about" element={<About/>}/>
          <Route path = "/homepage" element={<Homepage/>}/>
          <Route path='/add-failure'element={<AddForm/>}/>
          <Route path='/edit/:id' element={<UpdateForm/>}/>
        </Routes>
   </div>
  )
}

export default AllRoutes
