import React from 'react'

const Card = ({name, imgSrc}) => {
  return (
    <div style={{border : "2px solid black", width : "fit-content"}}>
        <img style={{height : "200px", width : "250px"}} src={imgSrc} alt="" />
        <p>{name}</p>
    </div>
  )
}

export default Card