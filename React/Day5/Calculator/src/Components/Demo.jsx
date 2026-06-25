import React, { useState } from 'react'

const Demo = () => {

    // const[un, setUn] = useState("")
    // const[pw, setPw] = useState("")
    // const[em, setEm] = useState("")

    // const[data, setData] = useState({
    //     email : "",
    //     password : "",
    //     username : ""
    // })


    const[data, setData] = useState(["", "", ""])

  return (
    <div>
        <input onInput={(e) => {
            // setUn(e.target.value)
            // setData(e.target.value)
            // setData({
            //     ...data, 
            //     username : e.target.value
            // })

            let arr = [e.target.value, ...data]
            arr[0] = e.target.value
            setData(arr)
            
        }} placeholder='Username' type="text" />


        <input onInput={(e) => {
            // setPw(e.target.value)
            // setData({
            //     ...data, 
            //     password : e.target.value
            // })


            let arr = [...data]
            arr[1] = e.target.value
            setData(arr)
        }} placeholder='Password' type="password" />


        <input onInput={(e) => {
            // setEm(e.target.value)
            // setData({
            //     ...data, 
            //     email : e.target.value
            // })


            let arr = [...data]
            arr[2] = e.target.value
            setData(arr)
        }} placeholder='Email' type="email" />

        <button onClick={() => {
           console.log(data)
        }}>CLick</button>
    </div>
  )
}

export default Demo