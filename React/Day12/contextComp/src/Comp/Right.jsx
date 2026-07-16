import React from 'react'
import { useListContext } from '../Utils/ListContext'

const Right = () => {

  const{data} = useListContext()

  return (
    <div>
        <ul>
            {data.map((item, index) => {
              return <li key={index}>{item}</li>
            })}
        </ul>
    </div>
  )
}

export default Right