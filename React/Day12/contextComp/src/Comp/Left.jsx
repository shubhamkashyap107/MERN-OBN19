import React, { useContext, useRef } from 'react'
import { useListContext } from '../Utils/ListContext'

const Left = () => {

  const{setData, data} = useListContext()
  const ipRef = useRef()

  return (
    <div>
        <input type="text" ref={ipRef} />
        <button onClick={() => {
          setData([...data, ipRef.current.value])
          ipRef.current.value = ""
        }}>ADD</button>
    </div>
  )
}

export default Left