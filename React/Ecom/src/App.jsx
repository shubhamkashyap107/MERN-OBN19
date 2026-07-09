import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Products from './Pages/Products'
import Cart from './Pages/Cart'
import Profile from './Pages/Profile'
import Landing from './Pages/Landing'
import { Toaster } from 'react-hot-toast'


const App = () => {
  
  const[cart, setCart] = useState([])

  return (
    <div>
      <Toaster />
      <Navbar cart={cart} />


      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/products' element={<Products setCart={setCart} cart={cart} />} />
        <Route path='/cart' element={<Cart cart={cart} setCart={setCart} />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </div>
  )
}

export default App