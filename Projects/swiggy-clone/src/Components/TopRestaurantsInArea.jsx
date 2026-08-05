const cloudUrl = import.meta.env.VITE_CLOUD_URL
import RestaurantCards from './RestaurantCards'

const TopRestaurantsInArea = ({title, info}) => {
  return (
    <section className="w-[70vw] mx-auto">

        <div className="flex justify-between px-10 py-6 items-center">
            <h2 className="font-extrabold text-lg">{title}</h2>

            <div className="flex gap-4">
                <i  className="fa-solid fa-circle-chevron-left fa-xl"></i>
                <i  className="fa-solid fa-circle-chevron-right fa-xl"></i>
            </div>
        </div>


        <div className="flex gap-5 overflow-scroll scrollbar-none">
           {
            info.map((item, index) => {
                return <RestaurantCards key={index} url={cloudUrl} info={item} size={"lg"} />
            })
           }
        </div>
    </section>
  )
}

export default TopRestaurantsInArea