import React from 'react'

// const Card = (props) => {
//   return (
//     <article style={{ backgroundColor : "lightpink"}}>
//       <h1>{props.name}</h1>
//       <p>{props.price}</p>
//     </article>
//   )
// }


const Card = (props) => {
  const{name, price} = props
  return (
    <article style={{ backgroundColor : "lightpink"}}>
      <h1>{name}</h1>
      <p>{price}</p>
    </article>
  )
}

// const Card = ({name, price}) => {
//   return (
//     <article style={{ backgroundColor : "lightpink"}}>
//       <h1>{name}</h1>
//       <p>{price}</p>
//     </article>
//   )
// }



export default Card