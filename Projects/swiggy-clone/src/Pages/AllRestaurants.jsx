import React, { useEffect, useState } from 'react'

const AllRestaurants = ({position}) => {

    const[apiData, setApiData] = useState(null)
   

    useEffect(() => {
        if(position)
        {
            fetch(import.meta.env.VITE_API + `lat=${position.latitude}&lng=${position.longitude}`)
        }
    }, [position])

  return (
    <div>AllRestaurants</div>
  )
}

export default AllRestaurants