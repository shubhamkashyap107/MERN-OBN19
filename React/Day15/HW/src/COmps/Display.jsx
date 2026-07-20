import React from 'react'
import { useSelector } from 'react-redux'

const Display = () => {

  const data = useSelector(store => store.data)

  return (
    <div>
        {data.map((item, index) => {
          return (
            <article> 
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
            </article>
          )
        })}
    </div>
  )
}

export default Display