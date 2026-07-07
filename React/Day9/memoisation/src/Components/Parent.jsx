import React, { useState } from 'react'
import {MemoisedChild as Child} from './Child'
// import Child from "./Child"

const Parent = () => {

    console.log("Parent rendered")
    const[count, setCount] = useState(0)


  return (
    <div>

        <div>
            <h1>{count}</h1>
            <div>
                <button onClick={() => {
                    setCount(count + 1)
                }}>+</button>
                <button onClick={() => {
                    setCount(count - 1)
                }}>-</button>
            </div>
        </div>

        <Child />
    </div>
  )
}

export default Parent