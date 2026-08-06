import React from 'react'
import { useNavigate } from 'react-router-dom'

const RestaurantCards = ({info, url, size}) => {
    const nav = useNavigate()
    const{avgRatingString, cloudinaryImageId, cuisines, areaName, name} = info.info
    const time = info.info.sla.slaString

    
  return (
    <article 
    onClick={() => {
        nav("/menu/123456")
    }}
    className={'shrink-0 ' + (size == "lg" ? "w-75" : "w-55")}>
        <img className={'w-full rounded-3xl ' + (size == "lg" ? "h-50" : "h-40")} src={url + cloudinaryImageId} alt="" />

        <div className='line leading-5'>
            <h2 className='font-bold'>{name}</h2>

            <p className='flex gap-1.5'>
                <img src="/greenStar.svg" alt="" />
                <span>{avgRatingString} - {time}</span>
            </p>

            <p className='w-full truncate text-gray-500 text-sm'>{cuisines.join(", ")}</p>
            <p className='text-gray-500 text-sm'>{areaName}</p>
        </div>
    </article>
  )
}

export default RestaurantCards