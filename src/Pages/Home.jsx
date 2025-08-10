import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="text-center py-24">
      <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl">
        Welcome to the Caprae Capital Platform
      </h1>
      <p className="mt-6 text-xl text-gray-500 max-w-3xl mx-auto">
        A new way to connect business buyers and sellers,
        making the acquisition process approachable and efficient.
      </p>
      <div className="mt-10 flex justify-center space-x-4">
        <Link
          to="/signup" // Changed to direct to the signup page
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-8 rounded-full shadow-lg transition duration-300"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Home;