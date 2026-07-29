import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Demo = () => {
    const[city, setCity] = useState("")
    const nav = useNavigate()
  return (
    <div>
    <input
        onChange={(e) => {
            setCity(e.target.value)
        }}
        type="text"
        id="city"
        list="cities"
        placeholder="Start typing..."
    />

    <datalist id="cities">
        <option value="Delhi" />
        <option value="Mumbai" />
        <option value="Bangalore" />
        <option value="Chennai" />
        <option value="Hyderabad" />
        <option value="Pune" />
    </datalist>

    <button onClick={() => {
        if(!city)
        {
            return
        }
        nav(`/answer/${city}`)
    }}>Go to answer page</button>

    </div>
  )
}

export default Demo