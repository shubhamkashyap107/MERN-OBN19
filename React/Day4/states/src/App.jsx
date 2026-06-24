import React from 'react'
import Counter from './Components/Counter'
import Text from './Components/Text'
import Sidebar from './Components/Sidebar'
import { useState } from 'react'


const App = () => {

  const[darkMode, setDarkMode] = useState(false)

  return (
    <div style={{
      backgroundColor : (darkMode ? "gray" : "white")
    }}>


      <nav>
        {/* <button onClick={() => {
          setDarkMode(false)
        }}>Light</button>
        <button onClick={() => {
          setDarkMode(true)
        }}>Dark</button> */}


        <button
          onClick={() => {
            setDarkMode(!darkMode)
          }}
        >
          {darkMode ? "Light" : "Dark"}
        </button>

      </nav>

      <div style={{display : "flex"}}>

      <Sidebar />

      <div>

        <Counter />
        <hr />
        <Text />
      </div>


      </div>


    </div>
  )
}

export default App