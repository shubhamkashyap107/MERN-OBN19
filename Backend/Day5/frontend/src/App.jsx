import React from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from "./Pages/Home"
import New from "./Pages/New"
import Edit from "./Pages/Edit"
import { Toaster} from "react-hot-toast"

const App = () => {
  return (
    <div>
      <Toaster />
      
      <Navbar />


      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<Home />} path='/home' />
        <Route element={<New />} path='/new' />
        <Route element={<Edit />} path='/edit' />

      </Routes>


    </div>
  )
}

export default App