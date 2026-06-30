import React, { useEffect, useState } from 'react'

const Apple = () => {
  const[count, setCount] = useState(0)

  useEffect(() => {
    // console.log("Apple component mounted")

    const id = setInterval(() => {
      console.log("AD")
    }, 1000)


    return () => {
      clearInterval(id)
      // console.log("Apple Component Unmounted")
    }

  }, [count])

  return (
    <div>
      <button onClick={() => {
        setCount(count + 1)
      }}>Increment</button>
      <h1>Count : {count}</h1>
    </div>
  )
}

export default Apple