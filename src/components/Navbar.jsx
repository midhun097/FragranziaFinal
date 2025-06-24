import React, { useState } from 'react';
import { FaSearch, FaShoppingCart, FaBell, FaUser, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartItems = useSelector(state => state.cart.items);
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="bg-white shadow-md px-6 py-4 sticky top-0 z-50">
      <div className="flex items-center justify-between flex-wrap gap-5">
        <div className="text-2xl font-bold text-blue-900 mr-6">
          <Link to="/">Fragranzia</Link>
        </div>

        <ul className="hidden lg:flex gap-6 font-medium text-gray-700 flex-grow justify-end">
          <li><Link to="/" className="hover:text-blue-900">Home</Link></li>
          <li><Link to="/products" className="hover:text-blue-900">Products</Link></li>
          <li><Link to="/gifting" className="hover:text-blue-900">Gifting</Link></li>
          <li><Link to="/about" className="hover:text-blue-900">About</Link></li> {/* ✅ This is the link to AboutPage */}
        </ul>

        <div className="flex items-center gap-4">
          {/* Search Box */}
          <div className="hidden sm:flex items-center border rounded-full px-4 py-2 bg-gray-100">
            <FaSearch className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Search Here"
              className="bg-transparent outline-none text-sm w-40"
            />
          </div>

          {/* Icons */}
          <div className="flex gap-3 items-center">
            <div className="relative">
              <Link to="/cart" className="p-2">
                <FaShoppingCart className="text-xl" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    {cartCount}
                  </span>
                )}
              </Link>
            </div>

            <button className="p-2 rounded-full border hover:bg-gray-100">
              <FaBell />
            </button>

            <Link to="/login" className="p-2 rounded-full border hover:bg-gray-100">
              <FaUser />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-xl">
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <ul className="flex flex-col gap-4 mt-4 font-medium text-gray-700 lg:hidden">
          <li><Link to="/" className="hover:text-blue-900">Home</Link></li>
          <li><Link to="/products" className="hover:text-blue-900">Products</Link></li>
          <li><Link to="/gifting" className="hover:text-blue-900">Gifting</Link></li>
          <li><Link to="/about" className="hover:text-blue-900">About</Link></li> {/* ✅ Link for mobile */}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
