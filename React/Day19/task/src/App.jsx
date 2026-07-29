import React, { useEffect } from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Homes from './Components/Homes'
import Fav from './Components/Fav'
import { useDispatch } from 'react-redux'
import { getProductDataThunk } from './Utils/ProductSlice'

const App = () => {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProductDataThunk())
  }, [])

  return (
    <div>
      <Navbar />


      <Routes>
        <Route path='/' element={<Homes />} />
        <Route path='/home' element={<Homes />} />
        <Route path='/fav' element={<Fav />}/>
      </Routes>
    </div>
  )
}

export default App