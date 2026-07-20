import React, { useRef } from 'react'
import { useDispatch } from "react-redux"
import { addItem } from '../Utils/Store'


const Form = () => {

  const ipRef = useRef()
  const taRef = useRef()
  const dispatch = useDispatch()

  return (
    <div style={{
      display : "flex"
    }}>
        <input ref={ipRef} type="text" />
        <textarea ref={taRef}></textarea>
        <button onClick={() => {
          if(!ipRef.current.value || !taRef.current.value)
          {
            return
          }
          dispatch(addItem({
            title : ipRef.current.value,
            desc : taRef.current.value
          }))
          ipRef.current.value = ""
          taRef.current.value = ""
        }}>Add Item</button>
    </div>
  )
}

export default Form