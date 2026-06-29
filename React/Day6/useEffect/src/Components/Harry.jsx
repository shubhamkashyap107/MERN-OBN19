import React from 'react'
import { useEffect, useState } from 'react'
const api = "https://hp-api.onrender.com/api/characters"

const Harry = () => {

    const[data, setData] = useState([])
    console.log(data)


    useEffect(() => {
        fetch(api)
        .then((res) => {
            return res.json()
        })
        .then((d) => {
            // console.log(d)
            setData(d)
        })
    }, [])

  return (

    <>
        <h1>Harry Potter Characters</h1>
        

        <div>
            {data.map((item) => {
                return <h1>{item.name}</h1>
            })}
        </div>
        
    </>
  )
}

export default Harry