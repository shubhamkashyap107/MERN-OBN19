import React from 'react'
import { useState } from 'react'

const Navbar = () => {

    const[useDarkMode, setUseDarkMode] = useState(false)

  return (
    <div>
        <button>Light</button>
        <button>Dark</button>
    </div>
  )
}

export default Navbar