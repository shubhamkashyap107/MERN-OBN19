import { memo, useMemo, useState } from "react"

const Child = () => {

    const[n, setN] = useState(1)
    const[text, setText] = useState("")



      function nthPrime(n) {
        if(n == 0)return 0
      let count = 0;
      let num = 2;

      while (true) {
          let isPrime = true;

          for (let i = 2; i < num; i++) {
              if (num % i === 0) {
                  isPrime = false;
                  break;
              }
          }

          if (isPrime) {
              count++;
              if (count === n) {
                  return num;
              }
          }

          num++;
      }
  }

  // let ans = nthPrime(n)

  let ans = useMemo(() => nthPrime(n), [n])


  return (
    <div>
      

      <h1>{n}th prime is {ans}</h1>

      <input 
       onChange={(e) => {
        setN(Number(e.target.value))
       }}
       type="number"
      />



      <input type="text" onChange={(e) => [
        setText(e.target.value)
      ]} />

      <h1>{text}</h1>


    </div>
  )
}


export const MemoisedChild = memo(Child)

// export default MemoisedChild
// export default memo(Child)


// export default Child