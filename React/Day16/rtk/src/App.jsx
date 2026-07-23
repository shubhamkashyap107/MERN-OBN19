import { useDispatch, useSelector } from "react-redux"
import { addText } from "./Utils/TextSlice"
import { useRef } from "react"

const App = () => {

  const dis = useDispatch()
  const ipRef = useRef()
  const data = useSelector(store => store.text)

  return (
    <div>

      <input ref={ipRef} type="text" />
      <button onClick={() => {
        dis(addText(ipRef.current.value))
        ipRef.current.value = ""
      }}>ClicK</button>

      <ul>
        {data.map((item) => {
          return <li>{item}</li>
        })}
      </ul>
    </div>
  )
}

export default App