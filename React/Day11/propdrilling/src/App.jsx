import React, { createContext, useContext, useState } from 'react'
import One from './Components/One'
import { CountContext } from './Components/Three'

export const MyContext = createContext()

const App = () => {
  const[naam, setNaam] = useState("")
  const[lastNaam, setLastNaam] = useState("")
  let val = useContext(CountContext)

  return (
    <MyContext.Provider value={{naam , lastNaam}}>

      <div>
        <h1>App</h1>

        <input type="text" onChange={(e) => {
          setNaam(e.target.value)
        }} />

        <input type="text" onChange={(e) => {
          setLastNaam(e.target.value)
        }} />

        <One />
      </div>

    </MyContext.Provider>
  )
}

export default App