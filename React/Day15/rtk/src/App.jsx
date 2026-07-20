import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { increment, decrement, reset} from "./Utils/CounterSlice"

const App = () => {

  const data = useSelector(store => store.Counter) // Store.subscribe()
  const d = useDispatch()
  return (
    <div>
      <h1>{data}</h1>

      <div>
        <button onClick={() => {
          d(increment('qwertyu'))
        }}>+</button>

        <button onClick={() => {
          d(reset())
        }}>0</button>

        <button onClick={() => {
          d(decrement())
        }}>-</button>
      </div>
    </div>
  )
}

export default App