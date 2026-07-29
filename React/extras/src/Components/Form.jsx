import React, { useReducer, useState } from 'react'
import { useNavigate } from 'react-router-dom'


const initialState = {
    un : "",
    pw : "",
    em : ""
}

const reducer = (state, action) => {
    switch (action.type) {
        case "USERNAME":
            return {
                ...state,
                un : action.payload
            }
        case "PASSWORD":
            return {
                ...state,
                pw : action.payload
            }

        case "EMAIL":
            return {
                ...state,
                em : action.payload
            }
    
        default:
            return state
    }
}


const Form = () => {

    // const[data, setData] = useState({
    //     un : "",
    //     pw : "",
    //     em : ""
    // })

    const[data, dispatch] = useReducer(reducer, initialState)
    const nav = useNavigate()
    // console.log(data)

  return (
    <div>
        <input
            tabIndex={4}
            onChange={(e) => {
                dispatch({
                    type : "USERNAME",
                    payload : e.target.value
                })
            }}
            type="text" placeholder='Username' 
        />
        <input 
            tabIndex={3}
            onChange={(e) => {
                dispatch({
                    type : "PASSWORD",
                    payload : e.target.value
                })
            }}
            type="text" placeholder='Password'
        />
        <input 
            tabIndex={2}
            onChange={(e) => {
                dispatch({
                    type : "EMAIL",
                    payload : e.target.value
                })
            }}
            type="text" placeholder='EMail'
        />


        <button tabIndex={1} onClick={() => {
            // console.log(data)
            if(!data.un || !data.pw || !data.em)
            {
                return
            }
            nav(`/componentkanaam/${data.un}/${data.pw}/${data.em}`)
        }}>Login</button>
    </div>
  )
}

export default Form