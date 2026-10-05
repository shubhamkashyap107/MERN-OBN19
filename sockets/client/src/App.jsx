import { useState } from "react"
import Chatbox from "./Comp/Chatbox"



function App() {

  const[isChatBoxOpen, setIsChatBoxOpen] = useState(false)

  return (

    <>
      <button onClick={() => setIsChatBoxOpen(!isChatBoxOpen)}>Toggle</button>

      <div>
        {isChatBoxOpen && <Chatbox />}
      </div>
    </>

  )
}

export default App
