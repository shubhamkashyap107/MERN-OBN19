import React, { useReducer } from 'react'
import { useNavigate } from 'react-router-dom'




const initialState = 0

const reducer = (state, action) => {
  switch(action.type)
  {
    case "INCREMENT":
      // console.log(action.payload)
      return state + 1

    case "DECREMENT":
      return state - 1

    case "RESET":
      return 0

    default:
      return state

  }
}

const UseReducerDemo = () => {
  const[count, dispatch] = useReducer(reducer, initialState)
  const nav = useNavigate()

  return (
    <div>
          
      <h1>{count}</h1>
      
      <div>
        <button onClick={() => {
          // setCOunt(count + 1)
          dispatch({
            type : "INCREMENT",
            payload : "OK"
          })
        }}>+</button>
        <button onClick={() => {
          // setCOunt(0)

          dispatch({
            type : "RESET"
          })
        }}>Reset</button>
        <button onClick={() => {
          // setCOunt(count - 1)
          dispatch({
            type : "DECREMENT"
          })
        }}>-</button>


        <button onClick={() => {
          nav(`/sp?count=${count}&name=shubham&ispresent=true`) // k=v&k2=v2&k3=v3
        }}>Take me somewhere</button>
      </div>
    </div>
  )
}

export default UseReducerDemo