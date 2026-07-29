import { useDispatch, useSelector } from "react-redux";
import { add2Fav } from "../Utils/ProductSlice";

const Homes = () => {
  const obj = useSelector((store) => store.product);
  const dispatch = useDispatch()

  if (obj.loading) {
    return (
      <h1 className="mt-10 text-center text-3xl font-bold">
        Loading...
      </h1>
    );
  }

  if (obj.error) {
    return (
      <h1 className="mt-10 text-center text-3xl font-bold text-red-500">
        {obj.error}
      </h1>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {obj.data.map((item) => (
          <div
            key={item.id}
            className="overflow-hidden rounded-xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            <img
              src={item.images[0]}
              alt={item.title}
              className="h-64 w-full object-cover"
            />

            <div className="space-y-3 p-5">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-600">
                  {item.category}
                </span>

                <span className="text-sm font-medium text-yellow-500">
                  ⭐ {item.rating}
                </span>
              </div>

              <h2 className="line-clamp-2 text-xl font-bold">
                {item.title}
              </h2>

              <p className="line-clamp-3 text-sm text-gray-600">
                {item.description}
              </p>

              <div className="space-y-1 text-sm text-gray-700">
                <p>
                  <span className="font-semibold">Brand:</span> {item.brand}
                </p>

                <p>
                  <span className="font-semibold">Stock:</span>{" "}
                  <span
                    className={
                      item.stock > 0
                        ? "font-semibold text-green-600"
                        : "font-semibold text-red-600"
                    }
                  >
                    {item.stock} ({item.availabilityStatus})
                  </span>
                </p>

                <p>
                  <span className="font-semibold">Warranty:</span>{" "}
                  {item.warrantyInformation}
                </p>

                <p>
                  <span className="font-semibold">Shipping:</span>{" "}
                  {item.shippingInformation}
                </p>
              </div>

              <div className="flex items-center justify-between border-t pt-4">
                <div>
                  <h3 className="text-2xl font-bold text-green-600">
                    ${item.price}
                  </h3>

                  <p className="text-xs text-gray-500">
                    {item.discountPercentage}% OFF
                  </p>
                </div>

                <button 
                onClick={() => {
                  dispatch(add2Fav(item))
                }}
                className="rounded-lg bg-pink-600 px-4 py-2 font-semibold text-white transition hover:bg-pink-700 active:scale-95">
                  ❤️ Add to Favorites
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homes;