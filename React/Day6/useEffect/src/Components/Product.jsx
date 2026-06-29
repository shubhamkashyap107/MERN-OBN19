import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Product = () => {


    const[data,setData] = useState([])

    useEffect(() => {
        fetch("https://dummyjson.com/products")
        .then((res) => {
            return res.json()
        })
        .then((d) => {
            setData(d.products)
        })
    }, [])

    // if(data.length == 0)
    // {
    //     return <h1>Loading...</h1>
    // }

  return (
    <div>
        {/* {data && data.map((item) => {
            return (
                <h1>
                    {item.title}
                </h1>
            )
        })} */}

            {
                data.length > 0 ? (
                    data.map((item) => {
                        return <h1>{item.title}</h1>
                    })
                ) : (
                    <h1>Loading...</h1>
                )
            }

    </div>
  )
}

export default Product