import React from 'react'
import { useState } from 'react'

const Text = () => {

    // let str = ""
    const[str, setStr] = useState("")

  return (
    <div>

        <input onInput={(e) => {
            // console.log(e.target.value)
            // str = e.target.value
            // console.log(str)

            setStr(e.target.value)
        }} type="text" />


        <h1>{str}</h1>

    </div>
  )
}

export default Text