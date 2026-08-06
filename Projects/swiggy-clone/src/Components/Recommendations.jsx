import { useNavigate } from "react-router-dom"

const cloudUrl = import.meta.env.VITE_CLOUD_URL

const Recommendations = ({title, info}) => {

    // console.log(info)
    const nav = useNavigate()

  return (
    <section className="w-[70vw] mx-auto">

        <div className="flex justify-between px-10 py-6 items-center">
            <h2 className="font-extrabold text-lg">{title}</h2>

            <div className="flex gap-4">
                <i  className="fa-solid fa-circle-chevron-left fa-xl"></i>
                <i  className="fa-solid fa-circle-chevron-right fa-xl"></i>
            </div>
        </div>


        <div className="flex overflow-scroll scrollbar-none">
            {info.map((item) => {
                // console.log(item.action.link.slice(35, 40))
                return <img onClick={() => {
                    nav(`/restaurants/${item.action.link.slice(35, 40)}`)
                }} key={item.id} className="h-50 cursor-pointer" src={cloudUrl + item.imageId} />
            })}
        </div>
    </section>
  )
}

export default Recommendations


// https://www.swiggy.com/collections/83633?collection_id=83633&search_context=northindian&tags=layout_CCS_NorthIndian&type=rcv2
