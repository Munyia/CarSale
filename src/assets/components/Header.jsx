import { Link, NavLink } from 'react-router-dom';
import { FaUserCircle, FaSearch } from 'react-icons/fa';
import { useCart } from '../context/CartContext';


const Header = () => {
  const { getItemCount } = useCart(); 
  return (
    <nav className="bg-white  sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        
        <div className="flex-shrink-0 ">
          <img  src="https://media.istockphoto.com/id/1408605259/vector/auto-sports-vehicle-silhouette.jpg?s=612x612&w=0&k=20&c=--lwIV-ayDVrjistgR22-B9xFic1xsAusMxxzu6Mjhw=" alt="CarSale" className="h-12 rounded-full" />
        </div>
        

        <div className="hidden md:flex space-x-12">
          <NavLink to="/" className="text-but text-lg font-semibold hover:text-black transition duration-300">Home</NavLink>
          <Link to="/carlisting" className="text-but text-lg font-semibold hover:text-black transition duration-300">Car Listing</Link>
          <Link to="/faq" className="text-but text-lg font-semibold hover:text-black transition duration-300">FAQ</Link>
          <Link to="/contact" className="text-but text-lg font-semibold hover:text-black transition duration-300">Contact</Link>
        </div>
        
        {/* Search and Profile */}
        <div className="flex items-center space-x-4">
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search by model, brand..."
              className="px-4 py-2 rounded-lg border  border-gray-700 bg-gray-800 text-white placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-but pl-10"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-200" />
          </div>
          
          {/* Profile and Login */}
          <div className="flex items-center space-x-7">
            <Link to="/userprofile" className="text-black hover:text-but transition duration-300 relative">
              <FaUserCircle className="text-2xl" />
              <Link to="/cart" className="text-black hover:text-but transition duration-300 relative">
              Cart
              {getItemCount() > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {getItemCount()}
                </span>
              )}
            </Link>
            </Link>
            <Link to="/login" className="bg-but text-white px-4 py-2 rounded-lg shadow-md hover:bg-white hover:text-but transition duration-300">
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
