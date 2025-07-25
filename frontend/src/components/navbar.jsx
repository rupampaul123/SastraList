import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full bg-white shadow-md px-4 md:px-8 py-3 flex items-center justify-between">
      {/* Logo */}
      <a href="/" className="text-xl font-bold text-blue-600">
        SastraList
      </a>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
        <Link to="/" className="hover:text-blue-600">Home</Link>
        <Link to="/post" className="hover:text-blue-600">Post Item</Link>
        <a href="/my-listings" className="hover:text-blue-600">My Listings</a>
      </div>

      {/* Login Button (Desktop) */}
      <div className="hidden md:block">
        <Link to="/login" className="text-sm text-white bg-blue-600 px-4 py-1.5 rounded-md hover:bg-blue-700">
          Login
        </Link>
      </div>

      {/* Hamburger Icon (Mobile) */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-700 focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-[60px] left-0 w-full bg-white shadow-md flex flex-col gap-4 px-6 py-4 md:hidden text-sm font-medium text-gray-700 z-50">
          <a href="/" className="hover:text-blue-600">Home</a>
          <a href="/post" className="hover:text-blue-600">Post Item</a>
          <a href="/my-listings" className="hover:text-blue-600">My Listings</a>
          <a href="/login" className="text-white bg-blue-600 px-4 py-1.5 rounded-md hover:bg-blue-700 text-center">
            Login
          </a>
        </div>
      )}
    </div>
  );
}
