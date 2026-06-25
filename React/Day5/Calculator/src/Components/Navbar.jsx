import React, { useState } from 'react'

const Navbar = ({setDarkMode}) => {

  return (
    <div>
        <button onClick={() => {
            setDarkMode(false)
        }}>Light</button>
        <button onClick={() => {
            setDarkMode(true)
        }}>Dark </button>
    </div>
  )
}

export default Navbar