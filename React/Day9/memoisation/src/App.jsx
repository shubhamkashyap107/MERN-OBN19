// import React from 'react'
// import Parent from './Components/Parent'

// const App = () => {
//   return (
//     <div>
//       <Parent />
//     </div>
//   )
// }

// export default App



// import React, { useCallback, useMemo, useState } from 'react'

// const App = () => {

//   const[n, setN] = useState(1)
//   const [text, setText] = useState("")

//   const nthPrime = useCallback(function(n) {
//       if(n == 0)return 0
//       let count = 0;
//       let num = 2;

//       while (true) {
//           let isPrime = true;

//           for (let i = 2; i < num; i++) {
//               if (num % i === 0) {
//                   isPrime = false;
//                   break;
//               }
//           }

//           if (isPrime) {
//               count++;
//               if (count === n) {
//                   return num;
//               }
//           }

//           num++;
//       }
//   }, [])
//   // let ans = nthPrime(n)
//   let ans = useMemo(() => nthPrime(n), [n])


//   return (
//     <div>
//       <div>
//         <h1>{n}th prime is {ans}</h1>
//         <input type="text" onChange={(e) => {
//           setN(Number(e.target.value))
//         }} />
//       </div>


//       <div>
//         <input type="text" onChange={(e) => {
//           setText(e.target.value)
//         }} />

//         <h1>{text}</h1>
//       </div>
//     </div>
//   )
// }

// export default App


import React, { useCallback, useState } from 'react'

const App = () => {

  const[name, setName] = useState("")
  const[age, setAge] = useState(18)

  const btnClickHandler = useCallback(function()
  {
    alert(`Hello ${name}`)
  }, [name])

  return (
    <div>
      <button onClick={btnClickHandler}>Hi</button>

      <input type="text" onChange={(e) => {
        setName(e.target.value)
      }} />

      <input type="text" onChange={(e) => {
        setAge(e.target.value)
      }} />


      <h1>{name}</h1>

    </div>
  )
}

export default App