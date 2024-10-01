import { Link, NavLink } from "react-router-dom"; // Import Link and NavLink for navigation
import { FaUserCircle, FaSearch, FaShoppingCart } from "react-icons/fa"; // Import FontAwesome icons for user, search, and cart
import { useCart } from "../context/CartContext"; // Custom hook to get cart item count
import { useState, useEffect } from "react";
import { useTheme } from "../context/Themecontext";
import { FaSun, FaMoon } from 'react-icons/fa';

const Header = ({ title }) => {
  const { getItemCount } = useCart(); // Access cart item count from context
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle mobile menu visibility
  const [isSearchOpen, setIsSearchOpen] = useState(false); // State to toggle mobile search bar visibility
  const { theme, toggleTheme } = useTheme();

  // Update the document title based on the passed title prop
  useEffect(() => {
    document.title = title || "CarSale"; // Fallback to "CarSale" if no title prop is provided
  }, [title]);

  return (
    <nav className="bg-white dark:bg-gray-800 dark:text-white sticky font-[verdana] top-0 z-50"> {/* Sticky header for always-visible navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        
        {/* Logo Section */}
        <Link to={'/'} className="flex-shrink-0">
          <img
            src="https://media.istockphoto.com/id/1408605259/vector/auto-sports-vehicle-silhouette.jpg?s=612x612&w=0&k=20&c=--lwIV-ayDVrjistgR22-B9xFic1xsAusMxxzu6Mjhw="
            alt="CarSale"
            className="h-12 rounded-full" // Styling the logo with a circular appearance
          />
        </Link>
        <button
      onClick={toggleTheme}
      className="bg-gray-300 dark:bg-black dark:text-white text-white p-2 rounded-full flex items-center"
    >
      {theme === 'dark' ? <FaSun /> : <FaMoon />}
      <span className="">
        {theme === 'dark' ? '' : ''}
      </span>
    </button>

        {/* Mobile Menu and Icons (Visible on smaller screens) */}
        <div className="md:hidden dark:bg-gray-800 dark:text-white  flex items-center space-x-4">
          {/* Toggle Mobile Search Bar */}
          <button onClick={() => setIsSearchOpen(!isSearchOpen)}>
            <FaSearch className="text-xl text-gray-800" /> {/* Search icon */}
          </button>

          {/* Profile Icon */}
          <Link
            to="/userprofile"
            className="text-black hover:text-but transition duration-300"
          >
            <FaUserCircle className="text-2xl" /> {/* Profile icon */}
          </Link>

          {/* Cart Icon */}
          <Link to="/cart" className="relative flex items-center">
            <FaShoppingCart className="text-2xl" /> {/* Cart icon */}
            {/* Display cart item count as a badge if items exist */}
            {getItemCount() > 0 && (
              <span className="absolute bottom-4 left-4 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                {getItemCount()} {/* Number of items in cart */}
              </span>
            )}
          </Link>

          {/* Mobile Hamburger Menu for navigation links */}
          <button
            className="text-gray-800  dark:bg-black dark:text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle mobile menu visibility
          >
            {/* Hamburger icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16" // Three-line icon representing menu
              />
            </svg>
          </button>
        </div>

        {/* Mobile Search Bar (Visible when isSearchOpen is true) */}
        {isSearchOpen && (
          <div className="absolute top-16 left-0 w-ful   dark:text-white bg-white shadow-md p-4 md:hidden">
            <input
              type="text"
              placeholder="Search by model, brand..."
              className="w-full px-4 py-2 rounded-lg border   dark:text-white border-gray-700 bg-gray-800 text-white placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-but"
            />
          </div>
        )}

        {/* Navigation Links (Visible on larger screens) */}
        <div className="hidden font-[verdana] md:flex space-x-12">
          <NavLink
            to="/"
            className="text-black font-[verdana]  dark:text-white dark:hover:text-but dark:hover:bg-p-2  text-lg font-semibold hover:text-but transition duration-300"
          >
            Home
          </NavLink>
          <Link
            to="/carlisting"
            className="text-black font-dm text-lg   dark:text-white dark:hover:text-but font-semibold hover:text-but transition duration-300"
          >
            Car Listing
          </Link>
          <Link
            to="/faq"
            className="text-black text-lg   dark:hover:text-but dark:text-white font-semibold hover:text-but transition duration-300"
          >
            FAQ
          </Link>
          <Link
            to="/contact"
            className="text-black   dark:hover:text-but dark:text-white text-lg font-semibold hover:text-but transition duration-300"
          >
            Contact
          </Link>
          <Link
            to="/auction"
            className="text-black   dark:hover:text-but dark:text-white text-lg font-semibold hover:text-but transition duration-300"
          >
            Auctions
          </Link>
          <Link
            to="/financing"
            className="text-black   dark:hover:text-but dark:text-white text-lg font-semibold hover:text-but transition duration-300"
          >
            Financing
          </Link>
        </div>

        {/* Search, Profile, Cart, and Login (Larger screens) */}
        <div className="hidden md:flex items-center space-x-4">

          {/* Profile, Cart, and Login */}
          <div className="flex items-center space-x-7">
          <Link
              to="/register"
              className=" px-4 py-2 rounded-lg hover:bg-white hover:text-but transition duration-300"
            >
              Signup
            </Link>
            <Link
              to="/userprofile"
              className="text-black dark:text-white transition duration-300"
            >
              <FaUserCircle className="text-2xl" /> {/* Profile icon */}
            </Link>
            <Link to="/cart" className="relative flex items-center">
              <FaShoppingCart className="text-2xl" /> {/* Cart icon */}
              {getItemCount() > 0 && (
                <span className="absolute bottom-4 left-4 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                  {getItemCount()} {/* Number of items in cart */}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* Mobile Dropdown Menu (Visible when isMenuOpen is true) */}
        {isMenuOpen && (
          <div className="absolute dark:bg-gray-900 dark:hover:text-but dark:text-gray-200 top-16 right-0 w-full bg-white shadow-md md:hidden">
            <ul className="space-y-4 p-4">
              <li>
                <NavLink
                  to="/"
                  className="text-black dark:bg-gray-900 dark:hover:text-but dark:text-white text-lg font-semibold hover:text-but transition duration-300"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <Link
                  to="/carlisting"
                  className="text-black text-lg dark:bg-gray-900 dark:hover:text-but dark:text-white font-semibold hover:text-but transition duration-300"
                >
                  Car Listing
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-black text-lg dark:bg-gray-900 dark:hover:text-but dark:text-white font-semibold hover:text-but transition duration-300"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-black text-lg dark:bg-gray-900 dark:hover:text-but dark:text-white font-semibold hover:text-but transition duration-300"
                >
                  Contact
                </Link>
              </li>
                <li>
                <Link
            to="/auction"
            className="text-black   dark:hover:text-but dark:text-white text-lg font-semibold hover:text-but transition duration-300"
          >
            Auctions
          </Link>
                </li>
                <li>
                <Link
            to="/financing"
            className="text-black   dark:hover:text-but dark:text-white text-lg font-semibold hover:text-but transition duration-300"
          >
            Financing
          </Link>
                </li>
              <li>
              <Link
              to="/register"
              className=" px-4 py-2 rounded-lg hover:bg-white hover:text-but transition duration-300"
            >
              Signup
            </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
