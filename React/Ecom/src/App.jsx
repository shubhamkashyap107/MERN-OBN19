import React from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Products from './Pages/Products'
import Cart from './Pages/Cart'
import Profile from './Pages/Profile'

const App = () => {
  return (
    <div>
      <Navbar />


      <Routes>
        <Route path='/products' element={<Products />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </div>
  )
}

export default App