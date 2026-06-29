// import React from 'react'
// import Harry from './Components/Harry'
// import { useState } from 'react'
// import { useEffect } from 'react'

// const App = () => {




//   const[count, setCount] = useState(0)
//   const[text, setText] = useState("")


//   useEffect(() => {
//     console.log("UE CHALA")
//   }, [text, count])


//   return (
//     <div>
//       {/* <Harry /> */}


//       <h1>Count : {count}</h1>
//       <h1>Text : {text}</h1>

//       <button onClick={() => {
//         setCount(count + 1)
//       }}>Increment</button>

//       <input type="text" onInput={(e) => {
//         setText(e.target.value)
//       }} />


//     </div>
//   )
// }

// export default App


import React from 'react'
import Product from './Components/Product'

const App = () => {
  return (
    <div>
      <Product />
    </div>
  )
}

export default App