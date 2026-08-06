import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from "react-router-dom"

const Navbar = () => {

    const[displayName, setDisplayName] = useState("")
    const position = useSelector(store => store.location)
    const nav = useNavigate()


    useEffect(() => {
        if(position.data)
        {
            const{latitude , longitude} = position.data
            fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`)
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                setDisplayName(data.display_name)
            })
        }
    }, [position])

  return (
    <nav className='flex justify-between items-center p-4 shadow-lg'>

        <img onClick={() => nav("/restaurants")} src="/logo2.svg" alt="" />

        {displayName && <p className='truncate w-100'>{displayName}</p>}


        <div className='flex gap-2'>
            <Link className='link'>
                <img className='icons' src="/sc.svg" alt="" />
                <p>Swiggy Corporate</p>
            </Link>


            <Link className='link'>
                <img className='icons' src="/search.svg" alt="" />
                <p>Search</p>
            </Link>


            <Link className='link'>
                <img className='icons' src="/offers.svg" alt="" />
                <p>Offers</p>
            </Link>


            <Link className='link'>
                <img className='icons' src="/help.svg" alt="" />
                <p>Help</p>
            </Link>

            <Link className='link'>
                <img className='icons' src="/signin.svg" alt="" />
                <p>Sign In</p>
            </Link>

            <Link className='link'>
                <img className='icons' src="/sc.svg" alt="" />
                <p>Cart</p>
            </Link>

        </div>

    </nav>
  )
}

export default Navbar