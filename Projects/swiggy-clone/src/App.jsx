import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Landing from './Pages/Landing'
import AllRestaurants from './Pages/AllRestaurants'

const App = () => {
  const[position, setPosition] = useState(null)


  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition((position) => {
      setPosition(position.coords)
    })
  }, [])

  return (
    <div>
      
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/restaurants' element={<AllRestaurants position={position} />} />
      </Routes>


    </div>
  )
}

export default App