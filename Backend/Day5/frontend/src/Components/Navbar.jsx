import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='bg-blue-500 flex justify-between p-4 text-white'>
        <h3>
            LOGO
        </h3>


        <div className='flex gap-5'>
            <Link to={"/"}>Home</Link>
            <Link to={"/new"}>New Task</Link>
        </div>
    </nav>
  )
}

export default Navbar