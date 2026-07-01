import React, { useEffect } from 'react'

const Services = () => {

  useEffect(() => {
  
    const id = setInterval(() => {
      console.log("AD")
    }, 2000)


    return () => {
      clearInterval(id)
    }

  }, [])

  return (
    <div>Services</div>
  )
}

export default Services