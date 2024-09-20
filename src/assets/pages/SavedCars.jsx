import React from 'react';
import { useCart } from '../context/CartContext';

const SavedCars = () => {
  const { getSavedCars } = useCart();
  const savedCars = getSavedCars();

  return (
    <div>
      <h1>Saved Cars</h1>
      {savedCars.length === 0 ? (
        <p>No saved cars.</p>
      ) : (
        <ul>
          {savedCars.map((car) => (
            <li key={car.id}>{car.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SavedCars;
