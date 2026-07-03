import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Error = () => {
  const navigate = useNavigate()
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6 text-center"
    >
      <h1 className="text-7xl font-extrabold text-gray-800">404</h1>

      <p className="mt-4 text-2xl font-semibold text-gray-700">
        Page Not Found
      </p>

      <p className="mt-2 text-gray-500 max-w-md">
        The page you're looking for doesn't exist or has been moved.
      </p>

      <button onClick={() => {
        navigate("/a")
      }} className='bg-red-300 p-3 rounded cursor-pointer'>Home</button>
    </div>
  );
};

export default Error;