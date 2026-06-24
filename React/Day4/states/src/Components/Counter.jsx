import { useState } from "react"

const Counter = () => {
    
    // let count = 0 // var, let & const
    const [count, setCount] = useState(0) // [state, function]

  return (
      <div>
        <div>{count}</div>

        <div>
            <button onClick={() => {
                setCount(count + 1)
            }}>+</button>
            <button onClick={() => {
                setCount(0)
            }}>R</button>
            <button onClick={() => {
                setCount(count - 1)
            }}>-</button>
        </div>
    </div>
  )
}

export default Counter