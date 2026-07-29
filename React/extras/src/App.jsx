import React, { useReducer, useState } from 'react'
import { Link, Route, Routes } from "react-router-dom"
import UseReducerDemo from './Components/UseReducerDemo'
import Form from './Components/Form'
import Demo from './Components/Demo'
import Asnwer from './Components/Asnwer'
import Demo2 from './Components/Demo2'
import SearchparamDemo from './Components/SearchparamDemo'


const App = () => {

  // const[count, setCOunt] = useState(0)
  // const[city, setCity] = useState("")
  // console.log(city)

  return (


    <div>




    <nav>
      <Link tabIndex={-1} to={"/ur"}>Use reducer</Link>
      <br />
      <Link tabIndex={-2} to={"/form"}>Form</Link>
        <br />
      <Link tabIndex={-3} to={"/demo"}>DEMO</Link>
          {/* <br />
      <Link tabIndex={-3} to={"/answer"}>ANSWER</Link> */}

    </nav>


    <Routes>
      <Route path='/ur' element={<UseReducerDemo />} />
      <Route path='/form' element={<Form />} />
      <Route path='/demo' element={<Demo  />} />
      <Route path='/answer/:kuchbhi' element={<Asnwer  />} />
      <Route path='/componentkanaam/:username/:password/:email' element={<Demo2  />} />
      <Route path='/sp' element={<SearchparamDemo  />} />

    </Routes>

    


    </div>
  )
}

export default App