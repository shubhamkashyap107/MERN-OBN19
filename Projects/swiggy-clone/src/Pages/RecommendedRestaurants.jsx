import { useParams } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import Loader from '../Components/Loader'
import RestaurantCards from '../Components/RestaurantCards'
const cloudUrl = import.meta.env.VITE_CLOUD_URL



const RecommendedRestaurants = () => {
    const{ id } = useParams()
    const location = useSelector(store => store.location)
    const[data, setData] = useState(null)


    useEffect(() => {
      if(location?.data)
      {
        fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=${location.data.latitude}&lng=${location.data.longitude}&collection=${id}&type=rcv2`)
        .then((res) => {
          return res.json()
        })
        .then((data) => {
          console.log(data.data.cards)
          setData(data)
        })
      }
      
    }, [location])


    if(!data)
    {
      return <div>
        <Navbar />

        <div className='h-screen flex justify-center items-center'>
          <Loader />
        </div>
       
    </div>
    }
   
  return (
    <div>
        <Navbar />


        <div className='flex flex-col items-center mt-10'>
          <header className='w-[70vw] '>
            <h1>{data.data.cards[0].card.card.title}</h1>
            <p>{data.data.cards[0].card.card.description}</p>
          </header>

          <div className='grid grid-cols-4 w-[70vw] mt-5 gap-2'>
            {data.data.cards.slice(2).map((item, index) => {
              console.log(item.card.card.info)
              return <RestaurantCards url={cloudUrl} info={item.card.card} />
            })}
          </div>
        </div>

    </div>
  )
}

export default RecommendedRestaurants
""