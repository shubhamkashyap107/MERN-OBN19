import React, { useEffect } from 'react'

const Experiences = () => {


  useEffect(() => {
    console.log("Exp comp mounted")
  }, [])

  return (
    <div>Experiences</div>
  )
}

export default Experiences