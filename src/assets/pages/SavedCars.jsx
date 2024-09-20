import React from "react";
import { useCart } from "../context/CartContext"; // Access cart context
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa"; // Use heart icon for saved cars

const SavedCars = () => {
  const { getSavedCars } = useCart(); // Get saved cars from CartContext
  const savedCars = getSavedCars(); // Fetch saved cars

  return (
    <div className="bg-white p-6 rounded-lg shadow-2xl shadow-slate-900">
      <Link
        to="/savedcars"
        className="text-xl font-semibold mb-4 text-gray-800 flex items-center"
      >
        <FaHeart className="text-red-700 mr-2" />
        Saved Cars
      </Link>
      {savedCars.length > 0 ? (
        <ul className="space-y-4">
          {savedCars.map((car, index) => (
            <li
              key={index}
              className="flex justify-between items-center border-b border-gray-500 pb-2"
            >
              <span className="text-black">{`${car.make} ${car.model}`}</span>
              <span className="text-gray-500">{`Price: $${car.price.toLocaleString()}`}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">You have no saved cars.</p>
      )}
    </div>
  );
};

export default SavedCars;
