import React, { useContext } from 'react'
import Three from './Three'
import { MyContext } from '../App'

const Two = () => {

  const{naam} = useContext(MyContext)

  return (
    <div>
        <h1>{naam}</h1>
        <Three/>
    </div>
  )
}

export default Two