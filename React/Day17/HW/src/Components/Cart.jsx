import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addItem,
  removeItem,
  clearCart,
} from "../Utils/CartSlice";

const Cart = () => {
  const data = useSelector((store) => store.Cartz);
  const nav = useNavigate();
  const dispatch = useDispatch();

  if (data.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[70vh] gap-4">
        <h1 className="text-3xl font-bold">🛒 Your Cart is Empty</h1>

        <button
          onClick={() => nav("/home")}
          className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto py-8 px-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Shopping Cart</h1>

        <button
          onClick={() => dispatch(clearCart())}
          className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600 transition"
        >
          Clear Cart
        </button>
      </div>

      {/* Cart Items */}
      <div className="space-y-4">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 bg-white shadow-md rounded-xl p-4"
          >
            {/* Product Image */}
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-24 h-24 object-cover rounded-lg"
            />

            {/* Product Details */}
            <div className="flex-1">
              <h2 className="text-lg font-semibold">{item.title}</h2>

              <p className="text-sm text-gray-500 line-clamp-2">
                {item.description}
              </p>

              <p className="mt-2 text-xl font-bold text-green-600">
                ${item.price}
              </p>
            </div>

            {/* Quantity Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => dispatch(removeItem(item.id))}
                className="w-8 h-8 rounded-md bg-gray-200 hover:bg-gray-300 font-bold text-lg"
              >
                -
              </button>

              <span className="w-8 text-center font-semibold text-lg">
                {item.quantity}
              </span>

              <button
                onClick={() => dispatch(addItem(item))}
                className="w-8 h-8 rounded-md bg-blue-500 text-white hover:bg-blue-600 font-bold text-lg"
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;