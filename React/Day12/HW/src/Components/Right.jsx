import React, { useContext } from 'react'
import { MyContext } from '../App'

const Right = () => {
  
  const{text} = useContext(MyContext)
  
  return (
    <div>
      <h1>{text}</h1>
    </div>
  )
}

export default Right