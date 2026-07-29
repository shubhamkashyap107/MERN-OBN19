import React from 'react'
import { useParams } from 'react-router-dom'

const Demo2 = () => {
    const{ username, password, email} = useParams()
  return (
    <div>
        <h1>Username is {username}</h1>
        <h1>Password is {password}</h1>
        <h1>Email is {email}</h1>
    </div>
  )
}

export default Demo2