import React from 'react';
import { Link } from 'react-router-dom';

const CarListing = () => {
  const cars = [
    {
      id: 1,
      make: 'Toyota',
      model: 'Camry',
      year: 2022,
      price: '$25,000',
      image: ''
    },
    {
      id: 2,
      make: 'Honda',
      model: 'Civic',
      year: 2023,
      price: '$22,000',
      image: ''
    },
    {
      id: 3,
      make: 'Ford',
      model: 'Mustang',
      year: 2021,
      price: '$30,000',
      image: ''
    }
  ];

  return (
    <div className="p-5 bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-6">Car Listings</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cars.map(car => (
          <div key={car.id} className="bg-white border rounded-lg shadow-md overflow-hidden">
            <img src={car.image} alt={`${car.make} ${car.model}`} className="w-full h-48 object-cover"/>
            <div className="p-4">
              <h2 className="text-xl font-semibold">{car.make} {car.model}</h2>
              <p className="text-gray-600">Year: {car.year}</p>
              <p className="text-gray-800 font-bold mt-2">{car.price}</p>
              <Link to={`/cardetails/${car.id}`} className="block text-blue-500 mt-4 hover:underline">View Details</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CarListing;
