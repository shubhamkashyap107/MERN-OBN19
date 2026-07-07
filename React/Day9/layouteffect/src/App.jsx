import React, { useEffect, useLayoutEffect, useState } from 'react'

const App = () => {

  const[n, setN] = useState(0)

  useEffect(() => {
    console.log("Use effect")
    
  })

  useLayoutEffect(() => {
    console.log("Use layout")

  })

  console.log("App rendered")


  return (
    <div>
      <h1>{n}</h1>

      <button onClick={() => {
        setN(n + 1)
      }}>+</button>
    </div>
  )
}

export default App