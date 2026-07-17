import { useSelector, useDispatch } from "react-redux"
import { buyCake, restockCake} from "../Utils/redux/Cake"
import { useState } from "react"

const Cake = () => {

    const dispatch = useDispatch()
    const[q, setQ] = useState(0)

    const {numOfCakes} = useSelector((store) => {
        return store.cake
    })

  return (
    <div>
        <h1>Num of cakes : {numOfCakes}</h1>
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