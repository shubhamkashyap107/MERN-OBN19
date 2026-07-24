import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'


const Users = () => {

  const data = useSelector((store) => {
    return store.User
  })

  if(data.loading)
  {
    return <h1>Loading....</h1>
  }

  if(data.error)
  {
    return <h1>{data.error}</h1>
  }

  return (
    <div>
        <ul>
            {data.data.map((item, index) => {
                return <li key={index}>{item.name}</li>
            })}
        </ul>
    </div>
  )
}

export default Users