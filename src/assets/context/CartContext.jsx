// src/context/CartContext.jsx
import React, { createContext, useState, useContext } from 'react';


const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== id));
  };

  const getCartItems = () => cartItems;

  // Ensure getItemCount is defined
  const getItemCount = () => cartItems.length;

  return (
    <CartContext.Provider value={{ getCartItems, addToCart, removeFromCart, getItemCount }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the CartContext
const useCart = () => useContext(CartContext);

export { CartProvider, useCart };
