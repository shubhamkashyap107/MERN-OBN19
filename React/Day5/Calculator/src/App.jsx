import React, { useState } from 'react'
import Calculator from './Components/Calculator'
import Demo from './Components/Demo'
import Left from './Components/Left'
import Right from './Components/Right'
import Navbar from './Components/Navbar'
import MainContent from './Components/MainContent'


const App = () => {

    const[text, setText] = useState("")
    const[darkMode, setDarkMode] = useState(false)

  return (
    <div>
      {/* <Calculator /> */}
      {/* <Demo /> */}


      {/* <div style={{display : "flex"}}>
        <Left setText={setText} />
        <Right text={text} />
      </div> */}


      <Navbar setDarkMode={setDarkMode} />
      <MainContent darkMode={darkMode} />
    </div>
  )
}

export default App