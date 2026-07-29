import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-slate-900 px-8 py-4 text-white shadow-md">
      <h3 className="text-2xl font-bold tracking-wide cursor-pointer">
        LOGO
      </h3>

      <div className="flex items-center gap-6 text-lg font-medium">
        <Link
          to="/home"
          className="transition-colors duration-200 hover:text-yellow-400"
        >
          Home
        </Link>

        <Link
          to="/fav"
          className="transition-colors duration-200 hover:text-yellow-400"
        >
          Favourites
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;