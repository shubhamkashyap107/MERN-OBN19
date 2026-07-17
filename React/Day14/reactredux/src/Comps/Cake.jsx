import { useSelector, useDispatch } from "react-redux"
import { buyCake, restockCake} from "../Utils/redux/Store"
import { useState } from "react"

const Cake = () => {

    const dispatch = useDispatch()
    const[q, setQ] = useState(0)

    const val = useSelector((store) => {
        return store.numOfCakes
    })

  return (
    <div>
        <h1>Num of cakes : {val}</h1>
        <input type="number" onChange={(e) => {
            setQ(e.target.value)
        }} />
        <button onClick={() => {
            dispatch(buyCake(q))
        }}>Buy Cake</button>

        <button onClick={() => {
            dispatch(restockCake())
        }}>Restock</button>
    </div>
  )
}
export default Cake