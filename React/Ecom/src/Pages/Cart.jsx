import React from "react";

const Cart = ({ cart, setCart }) => {
  const grandTotal = cart.reduce(
    (sum, item) => sum + item.price * item.q,
    0
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      {cart.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-[70vh]">
          <h1 className="text-4xl font-bold text-gray-700">
            🛒 Your Cart is Empty
          </h1>

          <p className="mt-3 text-gray-500">
            Looks like you haven't added anything yet.
          </p>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-5">
            {cart.map((item, index) => (
              // <article
              //   key={item.id}
              //   className="flex gap-5 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition"
              // >
              //   <img
              //     src={item.images[0]}
              //     alt={item.title}
              //     className="h-32 w-32 rounded-xl object-cover"
              //   />

              //   <div className="flex flex-1 flex-col justify-between">
              //     <div>
              //       <h2 className="text-xl font-semibold text-gray-800">
              //         {item.title}
              //       </h2>

              //       <p className="mt-2 text-lg font-bold text-blue-600">
              //         ${item.price}
              //       </p>
              //     </div>

              //     <div className="flex items-center justify-between mt-4">
              //       <span className="rounded-lg bg-gray-100 px-4 py-2 font-medium">
              //         Qty: {item.q}
              //       </span>

              //       <span className="text-lg font-bold text-gray-800">
              //         Total: ${item.price * item.q}
              //       </span>
              //     </div>
              //   </div>

              //   <div>
              //     <button
              //       onClick={() => {
              //         cart[index].q++
              //         setCart([...cart])
              //       }}
              //     className="border p-2">+</button>
              //     <button onClick={() => {
              //       cart[index].q--

              //       const newCart = cart.filter((item) => {
              //         return item.q >= 1
              //       })

              //       setCart(newCart)



              //     }} className="border p-2">-</button>
              //   </div>
              // </article>

              <article
  key={item.id}
  className="flex flex-col sm:flex-row gap-6 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-lg transition"
>
  <img
    src={item.images[0]}
    alt={item.title}
    className="h-36 w-36 rounded-xl object-cover self-center"
  />

  <div className="flex-1 flex flex-col justify-between">
    <div>
      <h2 className="text-xl font-semibold text-gray-800 line-clamp-1">
        {item.title}
      </h2>

      <p className="mt-2 text-2xl font-bold text-blue-600">
        ${item.price}
      </p>
    </div>

    <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
      {/* Quantity Controls */}
      <div className="flex items-center overflow-hidden rounded-lg border border-gray-300">
        <button
          onClick={() => {
            cart[index].q--;

            const newCart = cart.filter((item) => item.q >= 1);
            setCart(newCart);
          }}
          className="px-4 py-2 text-xl font-semibold hover:bg-gray-100 transition"
        >
          −
        </button>

        <span className="px-6 py-2 border-x border-gray-300 font-semibold text-lg">
          {item.q}
        </span>

        <button
          onClick={() => {
            cart[index].q++;
            setCart([...cart]);
          }}
          className="px-4 py-2 text-xl font-semibold hover:bg-gray-100 transition"
        >
          +
        </button>
      </div>

      {/* Total */}
      <div className="text-right">
        <p className="text-sm text-gray-500">Subtotal</p>
        <p className="text-xl font-bold text-gray-800">
          ${(item.price * item.q).toFixed(2)}
        </p>
      </div>
    </div>
  </div>

  {/* Remove Button */}
  {/* <button
    onClick={() => {
      setCart(cart.filter((_, i) => i !== index));
    }}
    className="self-start rounded-lg bg-red-50 px-4 py-2 text-red-600 hover:bg-red-100 transition"
  >
    Remove
  </button> */}
</article>
            ))}
          </div>

          {/* Order Summary */}
          <div className="h-fit rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-800">
              Order Summary
            </h2>

            <div className="mt-6 flex justify-between text-lg">
              <span>Total Items</span>
              <span>{cart.length}</span>
            </div>

            <div className="mt-3 flex justify-between text-lg">
              <span>Grand Total</span>
              <span className="font-bold text-blue-600">
                ${grandTotal.toFixed(2)}
              </span>
            </div>

            <button className="mt-8 w-full rounded-xl bg-blue-600 py-3 text-white font-semibold transition hover:bg-blue-700">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;