import { Routes, Route, BrowserRouter, Link } from "react-router-dom"
import Services from "./Components/Services"
import Experiences from "./Components/Experiences"
import Home from "./Components/Homes"
import Error from "./Components/Error"
import { useEffect } from "react"
import Gp from "./Components/Gp"


// const App = () => {



//   return (
//     <div>

//       <nav>
//         <Link to="/home">Home</Link>
//         <Link to="/experiences">Experiences</Link>
//         <Link to="/services">Services</Link>
//       </nav>

//       <Routes>
//         <Route path="/services" element={<Services />} />
//         <Route path="/home" element={<Home />} />
//         <Route path="/experiences" element={<Experiences />} />
//         <Route path="*" element={<h1>404, Not found</h1>} />
//         <Route path="*" element={<Error />} />
//       </Routes>






//     </div>
//   )
// }



const App = () => {

  useEffect(() => {
    console.log("App Mounted")
  }, [])
  return (
    <div>
      <Gp />
    </div>
  )
}

export default App