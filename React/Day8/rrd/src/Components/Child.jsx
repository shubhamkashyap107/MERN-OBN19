import React, { useEffect } from 'react'

const Child = () => {

    useEffect(() => {
        console.log("Child moounted")
    }, [])

  return (
    <div>Child</div>
  )
}

export default Child