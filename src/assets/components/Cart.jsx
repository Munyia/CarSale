import React, { useState } from 'react';
import { useCart } from '../context/CartContext'; // Corrected path
import { Link } from 'react-router-dom';
import { FaTrashAlt, FaRegHandPointUp, FaHandPointUp } from 'react-icons/fa'; // Icons for like and remove

const Cart = () => {
  const { getCartItems, removeFromCart } = useCart();
  const cartItems = getCartItems();

  // State to track liked items
  const [likedItems, setLikedItems] = useState([]);

  // State to track quantities for removal
  const [removeQuantities, setRemoveQuantities] = useState({});

  // State to track selected items and their quantities for checkout
  const [selectedItems, setSelectedItems] = useState({});

  // Function to toggle like status
  const toggleLike = (itemId) => {
    setLikedItems((prevLikes) =>
      prevLikes.includes(itemId) ? prevLikes.filter((id) => id !== itemId) : [...prevLikes, itemId]
    );
  };

  // Function to handle quantity input for removal
  const handleQuantityChange = (itemId, value) => {
    setRemoveQuantities((prev) => ({
      ...prev,
      [itemId]: value,
    }));
  };

  // Function to handle removal of selected quantities
  const handleRemove = (itemId) => {
    const quantity = parseInt(removeQuantities[itemId], 10) || 0;
    if (quantity > 0) {
      removeFromCart(itemId, quantity);
      setRemoveQuantities((prev) => ({
        ...prev,
        [itemId]: '', // Reset the quantity input after removal
      }));
    }
  };

  // Function to handle item selection for checkout
  const handleSelect = (itemId, quantity) => {
    setSelectedItems((prevSelected) => ({
      ...prevSelected,
      [itemId]: quantity,
    }));
  };

  const cartSummary = cartItems.reduce((acc, item) => {
    acc[item.id] = (acc[item.id] || 0) + 1;
    return acc;
  }, {});

  // Calculate total amounts
  const totalAmount = cartItems.reduce((acc, item) => acc + parseFloat(item.price.replace(/[$,]/g, '')) * (cartSummary[item.id] || 1), 0);
  const totalSelectedAmount = Object.entries(selectedItems).reduce((acc, [itemId, quantity]) => {
    const item = cartItems.find((item) => item.id === parseInt(itemId, 10));
    if (item) {
      return acc + parseFloat(item.price.replace(/[$,]/g, '')) * quantity;
    }
    return acc;
  }, 0);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-xl shadow-lg">
      <h1 className="text-3xl font-semibold text-center mb-6">Your Cart</h1>
      {Object.keys(cartSummary).length === 0 ? (
        <p className="text-center text-gray-500 text-lg">Your cart is empty</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ul className="space-y-4">
            {Object.entries(cartSummary).map(([itemId, quantity]) => {
              const item = cartItems.find((item) => item.id === parseInt(itemId, 10));
              return (
                <li
                  key={itemId}
                  className="bg-white p-4 rounded-lg shadow flex items-center justify-between space-x-6"
                >
                  <div className="flex items-center space-x-4">
                    {/* Image */}
                    <img
                      src={item.image}
                      alt={item.make}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                    {/* Car Info */}
                    <div>
                      <Link
                        to={`/carlisting/cardetail/${item.id}`}
                        className="text-xl font-semibold text-gray-800 hover:text-blue-600 transition"
                      >
                        {item.make} {item.model}
                      </Link>
                      <p className="text-gray-600">Price: ${item.price.toLocaleString()}</p>
                      <p className="text-gray-600">Quantity: {quantity}</p>
                    </div>
                  </div>

                  {/* Actions: Like, Remove, Select */}
                  <div className="flex space-x-4 items-center">
                    {/* Like button */}
                    <button
                      onClick={() => toggleLike(item.id)}
                      className={`text-2xl transition-colors ${
                        likedItems.includes(item.id) ? 'text-blue-600' : 'text-gray-400'
                      }`}
                    >
                      {likedItems.includes(item.id) ? <FaHandPointUp /> : <FaRegHandPointUp />}
                    </button>

                    {/* Remove button */}
                    <div className="flex items-center space-x-2">
                      <input
                        type="number"
                        value={removeQuantities[item.id] || ''}
                        onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                        className="w-16 p-1 border rounded"
                        min="1"
                      />
                      <button
                        onClick={() => handleRemove(item.id)}
                        className="text-red-500 hover:text-red-700 transition"
                      >
                        <FaTrashAlt className="text-2xl" />
                      </button>
                    </div>

                    {/* Select for checkout */}
                    <div className="flex items-center space-x-2">
                      <input
                        type="number"
                        min="1"
                        value={selectedItems[item.id] || ''}
                        onChange={(e) => handleSelect(item.id, parseInt(e.target.value, 10) || 0)}
                        className="w-16 p-1 border rounded"
                      />
                      <button
                        onClick={() => handleSelect(item.id, selectedItems[item.id] || 0)}
                        className={`text-2xl transition-colors ${
                          selectedItems[item.id] ? 'text-green-600' : 'text-gray-400'
                        }`}
                      >
                        {selectedItems[item.id] ? '✓' : '✗'}
                      </button>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          {/* Payment Section */}
          <div className="bg-white p-4 rounded-lg shadow mt-6">
            <h2 className="text-xl font-semibold mb-4">Payment Summary</h2>
            <p className="text-gray-700">Total Amount: ${totalAmount.toLocaleString()}</p>
            <p className="text-gray-700">Total Selected Amount: ${totalSelectedAmount.toLocaleString()}</p>
            <Link to="/checkout" className="block mt-4 text-center text-blue-600 hover:underline">
              Proceed to Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
