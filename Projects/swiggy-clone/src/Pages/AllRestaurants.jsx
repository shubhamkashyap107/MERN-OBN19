import React, { memo, useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import { useSelector } from 'react-redux'
import Recommendations from '../Components/Recommendations'
import Loader from '../Components/Loader'
import TopRestaurantsInArea from '../Components/TopRestaurantsInArea'
import RestaurantsGrid from '../Components/RestaurantsGrid'

const AllRestaurants = () => {

    const[apiData, setApiData] = useState(null)  
    const position = useSelector(store => store.location)
    
   

    useEffect(() => {
        if(position.data)
        {
            fetch(import.meta.env.VITE_API + `lat=${position.data.latitude}&lng=${position.data.longitude}`)
            .then((res) => {
              return res.json()
            })
            .then((data) => {
              setApiData(data.data)
            })
        }
    }, [position])


  if(!apiData)
  {
    return <>
      <Navbar />
      <div className='h-screen flex justify-center items-center'>
        <Loader />
      </div>
    </>
  }

  return (
    <>
      <Navbar />

      <div>
        <Recommendations title={apiData?.cards[0].card.card.header.title} info={apiData?.cards[0]?.card?.card?.imageGridCards?.info} />

        <hr className='w-[70vw] mx-auto mt-10 border-gray-200' />

        <TopRestaurantsInArea title={apiData?.cards[1]?.card?.card?.header?.title} info={apiData?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants} />

        <hr className='w-[70vw] mx-auto mt-10 border-gray-200' />

        <RestaurantsGrid title={apiData?.cards[2]?.card?.card?.title} info={apiData?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants} />

        <div className='h-screen'>

        </div>

      </div>
    </>
  )
}

export default memo(AllRestaurants)