import React from "react";

const Profile = () => {
  const user = {
    name: "John Doe",
    email: "john@example.com",
    phone: "+1 234 567 890",
    address: "221B Baker Street, London",
    orders: 18,
    wishlist: 12,
    cart: 4,
  };

  return (
    <div className="min-h-[90vh] bg-slate-50 py-10 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {/* Left Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 flex flex-col items-center">
          <img
            src="https://ui-avatars.com/api/?name=John+Doe&background=2563eb&color=fff&size=256"
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-blue-100"
          />

          <h2 className="mt-5 text-2xl font-bold text-gray-800">
            {user.name}
          </h2>

          <p className="text-gray-500">{user.email}</p>

          <button className="mt-6 w-full rounded-xl bg-blue-600 py-3 text-white font-semibold hover:bg-blue-700 transition">
            Edit Profile
          </button>
        </div>

        {/* Right Section */}
        <div className="md:col-span-2 space-y-6">
          {/* Personal Details */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-5">
              Personal Information
            </h3>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <p className="text-sm text-gray-500">Full Name</p>
                <p className="font-semibold">{user.name}</p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-semibold">{user.email}</p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <p className="font-semibold">{user.phone}</p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Address</p>
                <p className="font-semibold">{user.address}</p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid sm:grid-cols-3 gap-5">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 text-center">
              <h2 className="text-3xl font-bold text-blue-600">
                {user.orders}
              </h2>
              <p className="text-gray-500 mt-2">Orders</p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 text-center">
              <h2 className="text-3xl font-bold text-blue-600">
                {user.wishlist}
              </h2>
              <p className="text-gray-500 mt-2">Wishlist</p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 text-center">
              <h2 className="text-3xl font-bold text-blue-600">
                {user.cart}
              </h2>
              <p className="text-gray-500 mt-2">Cart Items</p>
            </div>
          </div>

          {/* Actions */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 flex flex-wrap gap-4">
            <button className="rounded-xl bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-700 transition">
              View Orders
            </button>

            <button className="rounded-xl border border-blue-600 px-6 py-3 text-blue-600 font-semibold hover:bg-blue-50 transition">
              Manage Address
            </button>

            <button className="rounded-xl border border-red-500 px-6 py-3 text-red-500 font-semibold hover:bg-red-50 transition">
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;