import React from "react";

const Card = ({ info, setCart, cart }) => {
  const { description, title, price, rating, images } = info;

  return (
    <article className="w-72 overflow-hidden rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
      <div className="overflow-hidden">
        <img
          src={images[0]}
          alt={title}
          className="h-56 w-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>

      <div className="p-5 flex flex-col gap-4">
        <h2 className="text-lg font-bold text-gray-800 line-clamp-1">
          {title}
        </h2>

        <p className="text-sm text-gray-500">
          {(description.length > 90 ? description.slice(0,90) : description) + "..."}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-blue-600">
            ${price}
          </span>

          <span className="flex items-center gap-1 rounded-full bg-yellow-100 px-3 py-1 text-sm font-semibold text-yellow-700">
            ⭐ {rating}
          </span>
        </div>

        <button 
         onClick={() => {
 
          if(cart.length == 0)
          {
            setCart([{...info, q : 1}])
          }
          else
          {
            let isElementPresent = false
            let idx = -1

            for(let i = 0; i < cart.length; i++)
            {
              if(info.id == cart[i].id)
              {
                isElementPresent = true
                idx = i
                break
              }
            }

            if(isElementPresent)
            {
              cart[idx].q++
            }
            else
            {
              cart.push({...info, q : 1})
            }
            setCart([...cart])
            // setCart(cart)
            
          }
        


         }}
         className="mt-2 w-full rounded-xl bg-blue-600 py-3 text-white font-semibold hover:bg-blue-700 transition">
          Add To Cart
        </button>
      </div>
    </article>
  );
};

export default Card;