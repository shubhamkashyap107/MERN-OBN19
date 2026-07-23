import React, { useEffect, useState } from 'react'
import Loader from './Loader'
import Card from './Card'

const Home = () => {

  const[data, setData] = useState([])
  
  useEffect(() => {
    fetch("https://dummyjson.com/products")
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      // console.log(data.products)
      setData(data.products)
    })
  }, [])
  


  if(data.length == 0)
  {
    return <div className='h-screen flex items-center justify-center'>
      <Loader />
    </div>
  }

  return (
    <div>
      <div className='grid grid-cols-4 gap-5'>
        {data.map((item, index) => <Card key={index} info={item} />)}
      </div>
    </div>
  )
}

export default Home