// import { useState } from "react";
// import Apple from "./Components/Apple";


// const App = () => {
  
//   const [showMain, setShowMain] = useState(false);
//   const[showBg, setShowBg] = useState(false)


//   // if(showMain)
//   // {
//   //   return <main>Hello 3</main>
//   // }

//   return (
//     <div>

//       <button
//        onClick={() => {
//         setShowMain(!showMain)
//        }}
//        className='border'
//       >
//       Show/Hide
//       </button>

      
//       {showMain && <main>Hello</main>}
//       {showMain ? <main>Hello 2</main> : null}



//        <button onClick={() => {
//         setShowBg(!showBg)
//        }}>Show/Hide BG</button>
//       <h1
//         // style={{
//         //   backgroundColor : (showBg ? "red" : "white")
//         // }}


//         // className={showBg ? "bg-red-700" : "bg-white"}
//         className={"border " + (showBg ? "bg-red-500" : "bg-white")}
//       >Apple</h1>
      


//     </div>
//   )
// }

// export default App



import React, { useState } from 'react'
import Apple from './Components/Apple'

const App = () => {

  const[show, setShow] = useState(true)

  return (
    <div>
      <button onClick={() => {
        setShow(!show)
      }}>Toggle</button>
      {show && <Apple />}
    </div>
  )
}

export default App