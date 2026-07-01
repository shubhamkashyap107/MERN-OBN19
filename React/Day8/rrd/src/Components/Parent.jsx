import React, { useEffect } from 'react'
import Child from './Child'

const Parent = () => {

    useEffect(() => {
        console.log("Parent mounted")
    }, [])

  return (
    <div>
        <Child />
    </div>
  )
}

export default Parent