import React from 'react';
import { useCart } from '../context/CartContext'; // Corrected path
import { Link } from 'react-router-dom';

const Cart = () => {
  const { getCartItems, removeFromCart } = useCart();
  const cartItems = getCartItems();

  return (
    <div>
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              <Link to={`/carlisting/cardetail/${item.id}`}>{item.make} {item.model}</Link>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
