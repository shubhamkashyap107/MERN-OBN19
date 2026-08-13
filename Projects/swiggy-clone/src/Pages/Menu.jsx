import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar'
import { useSelector } from 'react-redux'
import Loader from '../Components/Loader'
import { useParams } from 'react-router-dom'

const Menu = () => {

    const location = useSelector(store => store.location)
    const{ id } = useParams()
    
    useEffect(() => {
        fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5829964&lng=77.3170066&restaurantId=377799&catalog_qa=undefined&submitAction=ENTER",{
            credentials : "same-origin"
        })
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            console.log(data)
        })
    }, [])

    if(location.loading)
    {
        return <>
            <Navbar />
            <div className='flex h-screen w-screen justify-center items-center'>
                <Loader />
            </div>
        </>
    }

  return (
    <div>
        <Navbar />


        <div>

        </div>
    </div>
  )
}

export default Menu