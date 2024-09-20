// src/context/CartContext.jsx
import React, { createContext, useState, useContext } from "react";


// Create a Context for the cart
const CartContext = createContext();

const CartProvider = ({ children }) => {
  // State to hold the cart items and saved items
  const [cartItems, setCartItems] = useState([]);
  const [savedCars, setSavedCars] = useState([]); // State for saved cars

  // Function to add an item to the cart
  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]); // Append new item to existing items
  };

  // Function to remove an item from the cart by id
  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id)); // Filter out the item with the specified id
  };

  // Function to get the current cart items
  const getCartItems = () => cartItems;

  // Function to get the count of items in the cart
  const getItemCount = () => cartItems.length;

  // Function to save a car for later
  const saveCar = (car) => {
    setSavedCars((prevCars) => [...prevCars, car]); // Append new car to saved cars
  };

  // Function to get saved cars
  const getSavedCars = () => savedCars;

  // Function to remove a car from saved cars by id
  const removeSavedCar = (id) => {
    setSavedCars((prevCars) => prevCars.filter((car) => car.id !== id)); // Filter out the saved car with the specified id
  };

   // Function to toggle saving and unsaving a car
   const toggleSave = (item) => {
    const isSaved = savedCars.some((car) => car.id === item.id);
    
    if (isSaved) {
      removeSavedCar(item.id); // Remove from saved if already saved
    } else {
      saveCar(item); // Save car if not saved
    }
  };

  return (
    // Provide the cart functionalities to children components
    <CartContext.Provider
      value={{
        getCartItems,
        addToCart,
        removeFromCart,
        getItemCount,
        saveCar,
        getSavedCars: () => savedCars,
        removeSavedCar,
        toggleSave, // Include toggleSave in context
      }}
    >
      {children} {/* Render children components */}
    </CartContext.Provider>
  );
};

// Custom hook to use the CartContext easily in other components
const useCart = () => useContext(CartContext);

export { CartProvider, useCart }; // Export the provider and the custom hook
