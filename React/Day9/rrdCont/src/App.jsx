// import { Route, Routes} from "react-router-dom"
// import A from "./Components/A"
// import B from "./Components/B"
// import C from "./Components/C"
// import Navbar from "./Components/Navbar"
// import Error from "./Components/Error"

// const App = () => {
 
//   return (
//     <div>

//       {/* <Navbar /> */}

      
//       <Routes>

//         <Route path="/a" element={
//           <>
//             <Navbar />
//             <A />
//           </>
//           } />

//         <Route path="/b" element={
//           <>
//             <Navbar />
//             <B />
//           </>
//           } />


//         <Route path="/c" element={
//           <>
//             <Navbar />
//             <C />
//           </>
//           } />


//         <Route path="*" element={<Error />} />
//       </Routes>

//     </div>
//   )
// }

// export default App



import React, { useEffect, useRef, useState } from 'react'

function App()
{
  console.log("App Mounted")

  const[count, setCount] = useState(0)
  const usernameRef = useRef("") // { current : undefined}
  const inputRef = useRef() // {current : undefined}


  useEffect(() => {
    // console.log(inputRef)
    inputRef.current.focus()
  }, [])


  return (
    <>
      <h1>{usernameRef.current}</h1>

    <div>
        <h1>{count}</h1>
        <button onClick={() => {
          setCount(count + 1)
        }}>Increment</button>
      </div>

      <div>
        <input ref={inputRef} id='ip' onInput={(e) => {
          // setText(e.target.value)
          // text = e.target.value
          usernameRef.current = e.target.value
        }} type="text" />

        <button onClick={() => {
          console.log(usernameRef.current)
        }}>Submit</button>
      </div>
    </>
  )
}

export default App