import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Landing from './Pages/Landing'
import AllRestaurants from './Pages/AllRestaurants'
import { useDispatch } from 'react-redux'
import { getData } from './Utils/LocationSlice'
import RecommendedRestaurants from './Pages/RecommendedRestaurants'


const App = () => {

  const dispatch = useDispatch()
 

  useEffect(() => {
    dispatch(getData())
  }, [])

  return (
    <div>

     
      
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/restaurants' element={<AllRestaurants />} />
        <Route path='/restaurants/:id' element={<RecommendedRestaurants />} />
      </Routes>


    </div>
  )
}

export default App