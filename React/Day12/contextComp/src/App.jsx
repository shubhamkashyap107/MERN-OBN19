// import React, { createContext, useContext, useState } from 'react'
// import Gp from './Comp/Gp'
// import { CounterContext, CounterContextProvider, useCounterContext } from './Utils/CounterContext'


// const App = () => {

//   // const{count, setCount} = useContext(CounterContext)
//   const{count, setCount} = useCounterContext()

//   return (
//       <div>
//         <button onClick={() => {
//           setCount(count + 1)
//         }}>+</button>
//         <Gp  />
//       </div>    

//   )
// }

// export default App


import React from 'react'
import Left from './Comp/Left'
import Right from './Comp/Right'

const App = () => {
  
  return (
    <div>
      <div>
        <Left />
        <Right />
      </div>
    </div>
  )
}

export default App