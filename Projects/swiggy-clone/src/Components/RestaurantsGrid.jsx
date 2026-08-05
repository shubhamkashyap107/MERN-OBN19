const cloudUrl = import.meta.env.VITE_CLOUD_URL
import RestaurantCards from './RestaurantCards'

const RestaurantsGrid = ({title, info}) => {
    // console.log(title, info)
  return (
    <div className='w-[70vw] mx-auto mt-10'>
        <h2>{title}</h2>
        <div className='grid grid-cols-4 gap-2'>
            {info.map((item) => {
                return <RestaurantCards url={cloudUrl} info={item} />
            })} 
        </div>
    </div>
  )
}

export default RestaurantsGrid