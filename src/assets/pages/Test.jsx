import React, { useState, useEffect } from "react";
import { useCart } from "../context/CartContext"; // Import context for cart operations
import cars from "../data/carData"; // Import car data
import { Link } from "react-router-dom";
import { FaTrashAlt, FaRegBookmark, FaBookmark } from "react-icons/fa"; // Icons for save and remove
import Header from "./Header";

const Cart = () => {
  const { getCartItems, removeFromCart, saveCar } = useCart(); // Added saveCar to context
  const cartItems = getCartItems();

  const [savedCars, setSavedCars] = useState([]);

  useEffect(() => {
    document.title = "Your Cart | CarSale";
  }, []);

  // Function to toggle the save status of a car
  const toggleSave = (itemId) => {
    setSavedCars((prevSaves) =>
      prevSaves.includes(itemId)
        ? prevSaves.filter((id) => id !== itemId) // Remove from saved if already saved
        : [...prevSaves, itemId] // Add to saved if not saved
    );
    saveCar(itemId); // Save car to user profile in context
  };

  // Function to handle the removal of a car from the cart
  const handleRemove = (itemId) => {
    const quantity = 1; // Default to 1 for removal
    removeFromCart(itemId, quantity); // Remove the item from the cart
  };

  // Function to find car details by ID
  const findCarById = (id) => cars.find((car) => car.id === id);

  // Generate a summary of cart items
  const cartSummary = cartItems.reduce((acc, item) => {
    acc[item.id] = (acc[item.id] || 0) + 1;
    return acc;
  }, {});

  // Calculate the total amount for all items in the cart
  const totalAmount = cartItems.reduce((acc, item) => {
    const car = findCarById(item.id);
    return (
      acc +
      (car
        ? parseFloat(car.price.replace(/[$,]/g, "")) *
          (cartSummary[item.id] || 1)
        : 0)
    );
  }, 0);

  return (
    <div className="bg-body h-[100vh]">
      <Header />
      <div className="w-full md:w-[75%] mx-auto p-6 bg-white mt-5 rounded-xl shadow-lg">
        <h1 className="text-3xl font-semibold text-center mb-6">Your Cart</h1>
        {Object.keys(cartSummary).length === 0 ? (
          <p className="text-center text-gray-500 text-lg">
            Your cart is empty
          </p>
        ) : (
          <div className="flex flex-col md:flex-row gap-6">
            {/* Car Information Section */}
            <div className="flex-grow bg-body p-4 rounded-lg shadow-lg">
              <ul className="space-y-4">
                {Object.entries(cartSummary).map(([itemId, quantity]) => {
                  const car = findCarById(parseInt(itemId, 10));
                  return (
                    <li
                      key={itemId}
                      className="bg-white p-4 rounded-lg shadow flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-6"
                    >
                      <div className="flex items-center space-x-4">
                        {/* Image of the car */}
                        <img
                          src={
                            car?.images[0] || "https://via.placeholder.com/150"
                          } // Fallback image if car image not available
                          alt={car?.make}
                          className="w-24 h-24 object-cover rounded-lg max-w-full"
                        />
                        {/* Car Information */}
                        <div>
                          <Link
                            to={`/carlisting/cardetail/${car?.id}`}
                            className="text-xl font-semibold text-gray-800 hover:text-blue-600 transition"
                          >
                            {car?.make} {car?.model}
                          </Link>
                          <p className="text-gray-600">
                            Price: ${car?.price.toLocaleString()}
                          </p>
                          <p className="text-gray-600">Quantity: {quantity}</p>
                        </div>
                      </div>

                      {/* Actions: Save, Remove */}
                      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
                        {/* Save button */}
                        <button
                          onClick={() => toggleSave(car?.id)}
                          className={`text-2xl transition-colors ${
                            savedCars.includes(car?.id)
                              ? "text-blue-600"
                              : "text-gray-400"
                          }`}
                        >
                          {savedCars.includes(car?.id) ? (
                            <FaBookmark />
                          ) : (
                            <FaRegBookmark />
                          )}
                        </button>

                        {/* Remove button */}
                        <button
                          onClick={() => handleRemove(itemId)}
                          className="text-red-500 hover:text-red-700 transition"
                        >
                          <FaTrashAlt className="text-2xl" />
                        </button>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Payment Section */}
            <div className="bg-white p-4 rounded-lg shadow-lg mt-6 md:mt-0 flex-shrink-0 w-full md:w-1/3">
              <h2 className="text-xl font-semibold mb-4">Payment Summary</h2>
              <p className="text-gray-700">
                Total Amount: ${totalAmount.toLocaleString()}
              </p>
              <Link
                to="/checkout"
                className="block mt-4 text-center text-but hover:underline"
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
