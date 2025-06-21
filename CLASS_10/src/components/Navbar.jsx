import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const token = localStorage.getItem("token")
    console.log(token)

  return (
    <header className="bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Navigation Links */}
          <ul className="flex space-x-6 text-gray-700 font-medium">
            <li><Link to="/homepage" className="hover:text-blue-600 transition duration-200">Home</Link></li>
            {
                token && <li><Link to="/checkout" className="hover:text-blue-600 transition duration-200">Checkout</Link></li>
            }
            <li><Link to="/register" className="hover:text-blue-600 transition duration-200">Register</Link></li>
            <li><Link to="/login" className="hover:text-blue-600 transition duration-200">Login</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
