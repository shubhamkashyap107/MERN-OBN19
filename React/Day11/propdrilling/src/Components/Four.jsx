import  { useContext, memo } from "react"
import { MyContext } from "../App"
import { CountContext } from "./Three"


const Four = () => {

  let {naam, lastNaam} = useContext(MyContext)
  const{count} = useContext(CountContext)

  return (
    <div>
        <h1>Name is {naam}</h1>
        <h1>Second name is {lastNaam}</h1>
        <h1>Count is {count}</h1>
    </div>
  )
}

export default memo(Four)