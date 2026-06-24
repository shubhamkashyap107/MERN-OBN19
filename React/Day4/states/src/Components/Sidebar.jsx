import React from 'react'
import { useState } from 'react'

const Sidebar = () => {

    // let isMouseInSidebar = false
    const[isMouseInSidebar, setIsMouseInSidebar] = useState(false)

  return (
    <aside 
      onMouseEnter={() => {
        setIsMouseInSidebar(true)
      }}
      onMouseLeave={() => {
        setIsMouseInSidebar(false)
      }}
      style={{
            height : "100vh", 
            width : isMouseInSidebar ? "20vw" : "5vw", 
            backgroundColor : "lightblue"
        }}
    >

    </aside>
  )
}

export default Sidebar