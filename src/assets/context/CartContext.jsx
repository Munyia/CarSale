// src/context/CartContext.jsx
import React, { createContext, useState, useContext } from 'react';

// Create a Context for the cart
const CartContext = createContext();

const CartProvider = ({ children }) => {
  // State to hold the cart items
  const [cartItems, setCartItems] = useState([]);

  // Function to add an item to the cart
  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]); // Append new item to existing items
  };

  // Function to remove an item from the cart by id
  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== id)); // Filter out the item with the specified id
  };

  // Function to get the current cart items
  const getCartItems = () => cartItems;

  // Function to get the count of items in the cart
  const getItemCount = () => cartItems.length;

  return (
    // Provide the cart functionalities to children components
    <CartContext.Provider value={{ getCartItems, addToCart, removeFromCart, getItemCount }}>
      {children} {/* Render children components */}
    </CartContext.Provider>
  );
};

// Custom hook to use the CartContext easily in other components
const useCart = () => useContext(CartContext);

export { CartProvider, useCart }; // Export the provider and the custom hook
