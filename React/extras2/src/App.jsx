// import { Routes, Route, Link} from "react-router-dom"
// import { lazy, Suspense, useState } from "react"
// import CBC from "./Components/Cbc"
// const LazyLoadedA = lazy(() => import("./Components/A"))
// const LazyLoadedB = lazy(() => import("./Components/B"))
// const LazyLoadedC = lazy(() => import("./Components/C"))
// const LazyLoadedD = lazy(() => import("./Components/D"))
// const LazyLoadedLanding = lazy(() => import("./Components/Landing"))

// const App = () => {

//   const[show,setShow] = useState(false)
//   return (
//     // <div>
//     //   <nav className="flex justify-between bg-blue-500 text-white p-4">
//     //     <h3>LOGO</h3>

//     //     <div className="flex gap-3">
//     //       <Link to={"/a"}>A</Link>
//     //       <Link to={"/b"}>B</Link>
//     //       <Link to={"/c"}>C</Link>
//     //       <Link to={"/d"}>D</Link>
//     //     </div>
//     //   </nav>


//     //   <Routes>

//     //       <Route element={
//     //         <Suspense fallback={<h1>Bhai rukja, page aara hai...</h1>}>
//     //           <LazyLoadedLanding />
//     //         </Suspense>} 
//     //       path="/" />

//     //       <Route element={<Suspense fallback={<h1>Bhai rukja, page aara hai...</h1>}>
//     //         <LazyLoadedA />
//     //       </Suspense>} path="/a" />

//     //       <Route element={<Suspense fallback={<h1>Bhai rukja, page aara hai...</h1>}>
//     //         <LazyLoadedB />
//     //       </Suspense>} path="/b" />

//     //     <Route element={<Suspense fallback={<h1>Bhai rukja, page aara hai...</h1>}>
//     //       <LazyLoadedC />
//     //     </Suspense>} path="/c" />

//     //     <Route element={<Suspense fallback={<h1>Bhai rukja, page aara hai...</h1>}>
//     //       <LazyLoadedD />
//     //     </Suspense>} path="/d" />
//     //   </Routes>
//     // </div>


//     <div>
//       <button onClick={() => {
//         setShow(!show)
//       }}>Toggle</button>

//       {show && <CBC name={"Shubham"} />}

//     </div>
//   )
// }

// export default App


import { sum, mul, diff, div } from "./utils/functions" 
const App = () => {

  div()
  mul()
  return (
    <div>App</div>
  )
}

export default App