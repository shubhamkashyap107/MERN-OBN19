import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="flex bg-green-300 text-white justify-between p-3">
        <h3>LOGO</h3>


        <div className="flex gap-3">

            <NavLink to={"/products"} className={({isActive}) => {
                if(isActive)
                {
                    return "text-blue-400"
                }
            }}>Products</NavLink>

            <NavLink to={"/cart"} className={({isActive}) => {
                if(isActive)
                {
                    return "text-blue-400"
                }
            }}>Cart</NavLink>

            <NavLink to={"/profile"} className={({isActive}) => {
                if(isActive)
                {
                    return "text-blue-400"
                }
            }}>Profile</NavLink>

        </div>

    </nav>
  )
}

export default Navbar