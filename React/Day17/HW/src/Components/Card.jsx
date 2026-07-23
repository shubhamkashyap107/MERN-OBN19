import { useDispatch } from "react-redux"
import { addItem } from "../Utils/CartSlice";

const Card = ({ info }) => {

  const dispatch= useDispatch()

  const {
    title,
    description,
    category,
    price,
    discountPercentage,
    rating,
    stock,
    thumbnail,
    availabilityStatus,
    reviews,
  } = info;

  const discountedPrice = (
    price -
    (price * discountPercentage) / 100
  ).toFixed(2);

  return (
    <div className="w-80 bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
      <img
        src={thumbnail}
        alt={title}
        className="w-full h-52 object-cover"
      />

      <div className="p-4 flex flex-col gap-3">
        <div>
          <p className="text-sm text-gray-500 capitalize">{category}</p>
          <h2 className="text-xl font-bold">{title}</h2>
        </div>

        <p className="text-gray-600 text-sm line-clamp-2">
          {description}
        </p>

        <div className="flex items-center gap-3">
          <span className="text-2xl font-bold text-green-600">
            ${discountedPrice}
          </span>

          <span className="text-gray-400 line-through">
            ${price}
          </span>

          <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded">
            {discountPercentage}% OFF
          </span>
        </div>

        <div className="flex justify-between text-sm">
          <span>⭐ {rating}</span>
          <span>{reviews.length} Reviews</span>
        </div>

        <div className="flex justify-between items-center">
          <span
            className={`text-sm font-medium ${
              stock > 10 ? "text-green-600" : "text-orange-500"
            }`}
          >
            {availabilityStatus}
          </span>

          <span className="text-sm text-gray-500">
            Stock: {stock}
          </span>
        </div>

        <button
         onClick={() => {
          dispatch(addItem(info))
         }}
         className="mt-2 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Card;