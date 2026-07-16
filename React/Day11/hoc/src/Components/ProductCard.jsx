import React from 'react'

const ProductCard = ({name, price, image}) => {
  return (
    <div className='border'>
        <img src={image} alt="" />

        <div>
            <p>{name}</p>
            <p>{price}</p>
        </div>
    </div>
  )
}

export default ProductCard