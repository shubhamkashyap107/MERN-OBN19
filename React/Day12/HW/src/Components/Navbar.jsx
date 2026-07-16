import React, { useContext } from 'react'
import { MyContext } from '../App'

const Navbar = () => {


  const{setLightMode} = useContext(MyContext)

  return (
    <div className='flex bg-blue-400 p-2 justify-between text-white'>
        <h3>LOGO</h3>

        <div className='flex gap-2'>
            <button onClick={() => {
              setLightMode(true)
            }}>Light</button>
            <button onClick={() => {
              setLightMode(false)
            }}>Dark</button>
        </div>
    </div>
  )
}

export default Navbar