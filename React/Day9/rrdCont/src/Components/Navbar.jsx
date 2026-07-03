// import { Link } from "react-router-dom"

// const Navbar = () => {

//   console.log(window.location.pathname)

//   return (
//     <nav className="bg-blue-400 flex justify-between p-4">
//         <h3>LOGO</h3>


//         <div className="flex gap-3">
//             <Link className={
//               window.location.pathname == "/a" ? "bg-red-700" : undefined
//             } to="/a">A</Link>
//             <Link className={
//               window.location.pathname == "/b" ? "bg-red-700" : undefined
//             } to="/b">B</Link>
//             <Link className={
//               window.location.pathname == "/c" ? "bg-red-700" : undefined
//             } to="/c">C</Link>
//         </div>
//     </nav>
//   )
// }

// export default Navbar



import { NavLink } from "react-router-dom"


const Navbar = () => {
  return (
    <nav className="bg-blue-900 text-white flex justify-between p-2">
      <h3>LOGO</h3>

      <div className="flex gap-3">
        <NavLink 
         className={({isActive}) => {
          if(isActive)
          {
            return "bg-amber-400"
          }
         }}
         to={"/a"}>
          A
        </NavLink>
        <NavLink
        
        className={({isActive}) => {
          if(isActive)
          {
            return "bg-amber-400"
          }
         }}to={"/b"}>B</NavLink>
        <NavLink
        
        className={({isActive}) => {
          if(isActive)
          {
            return "bg-amber-400"
          }
         }}to={"/c"}>C</NavLink>
      </div>
    </nav>
  )
}

export default Navbar
