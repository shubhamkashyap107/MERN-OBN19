import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const val = useSelector((store) => {
    let ans = 0;
    for (let item of store.Cartz) {
      ans += item.quantity;
    }
    return ans;
  });

  return (
    <nav className="bg-blue-500 text-white flex justify-between items-center px-8 py-4 shadow-md">
      <h1 className="text-2xl font-bold cursor-pointer">
        LOGO
      </h1>

      <div className="flex items-center gap-8 text-lg font-medium">
        <Link
          to="/home"
          className="hover:text-blue-200 transition"
        >
          Home
        </Link>

        <div className="relative">
          <Link
            to="/cart"
            className="hover:text-blue-200 transition"
          >
            🛒 Cart
          </Link>

          {val > 0 && (
            <span className="absolute -top-2 -right-4 bg-red-500 text-white text-xs font-bold h-5 w-5 rounded-full flex items-center justify-center">
              {val}
            </span>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;