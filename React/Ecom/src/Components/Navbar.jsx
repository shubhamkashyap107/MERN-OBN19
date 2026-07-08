import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const nav = useNavigate();

  const navLinkStyle = ({ isActive }) =>
    `px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
      isActive
        ? "bg-blue-600 text-white shadow-md"
        : "text-gray-700 hover:bg-blue-100 hover:text-blue-600"
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto h-[10vh] flex items-center justify-between px-6">
        <h1
          onClick={() => nav("/")}
          className="text-3xl font-extrabold text-blue-600 cursor-pointer tracking-wide"
        >
          ShopEase
        </h1>

        <div className="flex items-center gap-2">
          <NavLink to="/products" className={navLinkStyle}>
            Products
          </NavLink>

          <NavLink to="/cart" className={navLinkStyle}>
            Cart
          </NavLink>

          <NavLink to="/profile" className={navLinkStyle}>
            Profile
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;