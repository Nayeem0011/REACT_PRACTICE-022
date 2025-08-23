import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-green-600 text-white shadow-md">
      <nav className="flex items-center justify-between max-w-6xl mx-auto px-4 py-3">
        {/* Logo */}
        <Link to="/" className="font-bold text-2xl tracking-wide">
          Recipe<span className="text-blue-300">Finder</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="font-medium hover:text-blue-300 hover:underline transition">Home</Link>
          <Link to="/about" className="font-medium hover:text-blue-300 hover:underline transition">About</Link>
          <Link to="/contact" className="font-medium hover:text-blue-300 hover:underline transition">Contact</Link>
        </div>

        {/* Auth Buttons (Desktop) */}
        <div className="hidden md:flex space-x-4">
          <Link to="/login" className="py-2 rounded-lg text-white font-medium hover:text-blue-300 hover:underline transition">
            Login
          </Link>
          <Link to="/signup" className="px-4 py-2 rounded-lg text-white font-medium hover:text-blue-300 hover:underline transition">
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-green-700 text-white space-y-4 px-4 py-4 shadow-inner">
          <Link to="/" className="block font-medium hover:underline hover:text-blue-300 transition">Home</Link>
          <Link to="/about" className="block font-medium hover:underline hover:text-blue-300 transition">About</Link>
          <Link to="/contact" className="block font-medium hover:underline hover:text-blue-300 transition">Contact</Link>

          <div className="flex flex-col space-y-2 pt-3 border-t border-green-500">
            <Link to="/login" className="px-4 py-2 rounded-lg bg-white text-green-600 font-semibold hover:bg-blue-300 hover:text-green-800 transition text-center">
              Login
            </Link>
            <Link to="/signup" className="px-4 py-2 rounded-lg bg-blue-400 text-green-900 font-semibold hover:bg-blue-500 transition text-center">
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
