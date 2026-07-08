import { useEffect, useState } from "react"
import Loader from "../Components/Loader"
import Card from "../Components/Card"
const api = "https://dummyjson.com/products"


const Products = ({setCart, cart}) => {

  const[data,setData] = useState([])

  useEffect(() => {

    async function getData()
    {
      const res = await fetch(api)
      const apiData = await res.json()
      setData(apiData.products)
    }

    getData()

  }, [])

  if(data.length == 0)
  {
    return (
      <div className="flex justify-center items-center h-[90vh]">
        <Loader />
      </div>
    )
  }

  return (
    <div className="grid grid-cols-4 p-4">
      
    {
      data.map((item) => {
        return <Card cart={cart} setCart={setCart} info={item} />
      })
    }


    </div>
  )
}

export default Products