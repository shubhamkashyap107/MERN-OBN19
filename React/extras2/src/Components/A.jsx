import React, { useEffect, useState } from 'react'

const A = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    fetch("https://dummyjson.com/users")
    .then((res) => {
      return  res.json()
    })
    .then((data) => {
      setData(data.users)
    })
  }, [])

  // if(data.length == 0)
  // {
  //   return <h1>Loading...</h1>
  // }

  return (
    <div>
      {/* {data.length == 0 && <h1>Loading...</h1>} */}
      {data.length == 0 ? <h1 className='text-4xl'>Loading...</h1> : data.map((item) => {
        return <p>{item.firstName}</p>
      })}
    </div>
  )
}

export default A