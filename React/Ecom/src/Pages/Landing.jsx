import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <section className="min-h-[90vh] bg-gradient-to-br from-slate-50 via-white to-blue-50 flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-5">
            🚀 New Collection 2026
          </span>

          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Discover Your
            <span className="text-blue-600"> Perfect </span>
            Shopping Experience
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-xl">
            Shop the latest fashion, electronics, accessories, and much more.
            Premium quality products at unbeatable prices with fast delivery.
          </p>

          <div className="flex gap-4 mt-8">
            <Link
              to="/products"
              className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-3 rounded-lg font-semibold transition"
            >
              Shop Now
            </Link>

            <Link
              to="/products"
              className="border border-gray-300 hover:border-blue-600 hover:text-blue-600 px-7 py-3 rounded-lg font-semibold transition"
            >
              Explore
            </Link>
          </div>

          <div className="flex gap-10 mt-12">
            <div>
              <h3 className="text-3xl font-bold text-blue-600">10K+</h3>
              <p className="text-gray-500">Happy Customers</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-blue-600">500+</h3>
              <p className="text-gray-500">Premium Products</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-blue-600">24/7</h3>
              <p className="text-gray-500">Customer Support</p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=900"
            alt="Shopping"
            className="rounded-3xl shadow-2xl w-full max-w-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Landing;