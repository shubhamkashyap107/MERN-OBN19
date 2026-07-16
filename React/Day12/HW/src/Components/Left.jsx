import React, { useContext } from 'react'
import { MyContext } from '../App'

const Left = () => {

  const{ setText, lightMode } = useContext(MyContext)

  return (
    <div className={'h-screen w-[50vw] border ' + (lightMode ? "bg-white" : "bg-black")}>
      <input onChange={(e) => {
        setText(e.target.value)
      }} type="text" className='border' />
    </div>
  )
}

export default Left