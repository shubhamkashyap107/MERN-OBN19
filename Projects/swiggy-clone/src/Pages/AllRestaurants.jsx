import React, { memo, useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import { useSelector } from 'react-redux'

const AllRestaurants = () => {

    const[apiData, setApiData] = useState(null)
    console.log(apiData)
    const position = useSelector(store => store.location)
    
   

    useEffect(() => {
        if(position.data)
        {
            fetch(import.meta.env.VITE_API + `lat=${position.data.latitude}&lng=${position.data.longitude}`)
            .then((res) => {
              return res.json()
            })
            .then((data) => {
              setApiData(data)
            })
        }
    }, [position])

  return (
    <>
      <Navbar />

      <div>

      </div>
    </>
  )
}

export default memo(AllRestaurants)