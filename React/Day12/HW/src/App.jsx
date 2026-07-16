import React, { createContext, useState } from 'react'
import Navbar from './Components/Navbar'
import Left from './Components/Left'
import Right from './Components/Right'


export const MyContext = createContext()

const App = () => {

  const[text, setText] = useState("")
  const[lightMode, setLightMode] = useState(true)

  return (
    <MyContext.Provider value={{text, setText, lightMode, setLightMode}}>

      <div>
        <Navbar />


        <div className='flex'>
          <Left />
          <Right />
        </div>
      </div>

    </MyContext.Provider>

  )
}

export default App