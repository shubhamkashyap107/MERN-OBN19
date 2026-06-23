import React from 'react'
import Card from './Card'

const HeroSection = () => {
  return (
    <main style={{height : "92vh", backgroundColor : "lightblue", width : "80vw", display : "grid", gridTemplateColumns : "1fr 1fr 1fr", gap : "20px"}}>
      <Card price={100} name="Laptop" />
      <Card price={100} name="Mobile" />
      <Card price={100} name="Pankha" />
      <Card price={100} name="Fridge" />
      <Card price={100} name="Bike" />
      {/* <Card price={100} name="Cooler" /> */}
      {Card({name : "Bike", price : "300"})}
      {/* {Card("asertyui", 200)} */}
    </main>
  )
}

export default HeroSection