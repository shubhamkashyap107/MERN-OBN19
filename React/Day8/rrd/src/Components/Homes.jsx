import React, { useEffect } from 'react'

const Homes = () => {
  
  useEffect(() => {
    console.log("Homes comp mounted")
  }, [])

  return (
    <div>Homes</div>
  )
}

export default Homes