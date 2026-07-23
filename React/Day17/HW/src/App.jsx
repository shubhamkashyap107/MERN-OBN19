import { Routes, Route} from "react-router-dom"
import Navbar from "./Components/Navbar"
import Home from "./Components/Home"
import Cart from "./Components/Cart"

const App = () => {
  return (
    <div>
      
      <Navbar />


      <Routes>
        <Route path="/home" element={<Home />}>Home</Route>
        <Route path="/cart" element={<Cart />}>Cart</Route>
      </Routes>

    </div>
  )
}

export default App