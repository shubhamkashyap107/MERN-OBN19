import React, { useEffect } from 'react'
import Parent from './Parent'

const Gp = () => {
    useEffect(() => {
        console.log("GP component mounted")
    }, [])
  return (
    <div>
        
        <Parent />


    </div>
  )
}

export default Gp