import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import { FaCar, FaCalendarAlt, FaHeart } from 'react-icons/fa';
import Header from '../components/Header';

const data = {
  name: 'John Doe',
  installmentPlans: [
    { car: 'Luxury SUV', monthly: '$500' },
    { car: 'Electric Sedan', monthly: '$300' }
  ],
  orderHistory: [
    { car: 'Luxury SUV', date: 'Jan 15, 2024' },
    { car: 'Compact Hatchback', date: 'Feb 22, 2024' }
  ],
  savedCars: [
    { car: 'Convertible Sports Car', price: '$70,000' },
    { car: 'Family Minivan', price: '$40,000' }
  ]
};

const UserProfile = () => {
  const [userData, setUserData] = useState({
    name: '',
    installmentPlans: [],
    orderHistory: [],
    savedCars: []
  });

  useEffect(() => {
    // Simulate fetching data
    setTimeout(() => {
      setUserData(data);
    }, 1000);
  }, []);

  return (
      <div>
    <div className="bg-body min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl bg--600 bg-pry shadow-2xl shadow-slate-900 mx-auto bg-white rounded-lg p-6">
        {/* Home Link */}
        <div className="mb-8 flex items-center">
          <Link to="/" className="text-but text-lg hover:text-black transition duration-300">
            &larr; Back to Home
          </Link>
        </div>
        
        {/* Profile Header */}
        <div className="flex items-center space-x-4 mb-8">
          <div className="w-24 h-24 bg-body shadow-2xl shadow-slate-500 rounded-full flex-shrink-0">
            <img 
              src="https://www.w3schools.com/w3images/avatar2.png" 
              alt="User Avatar" 
              className="w-full h-full object-cover rounded-full" 
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-but">Welcome, {userData.name}</h1>
            <p className="text-black">Your account summary and details</p>
          </div>
        </div>
        
        {/* Dashboard Sections */}
        <div className="grid shadow-2xl shadow-slate-900 grid-cols-1 md:grid-cols-3 gap-6">
          {/* Ongoing Installment Plans */}
          <div className="bg-white shadow-2xl shadow-slate-900 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 text-black flex items-center">
              <FaCalendarAlt className="text-but mr-2" />
              Ongoing Installment Plans
            </h2>
            <ul className="space-y-4">
              {userData.installmentPlans.map((plan, index) => (
                <li key={index} className="flex justify-between items-center border-b border-gray-500 pb-2">
                  <span className="text-black">{plan.car}</span>
                  <span className="text-gray-500">Monthly: {plan.monthly}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Order History */}
          <div className="bg-white p-6 rounded-lg shadow-2xl shadow-slate-900">
            <h2 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
              <FaCar className="text-but mr-2" />
              Order History
            </h2>
            <ul className="space-y-4">
              {userData.orderHistory.map((order, index) => (
                <li key={index} className="flex justify-between items-center border-b border-gray-500 pb-2">
                  <span className="text-black">Purchased: {order.car}</span>
                  <span className="text-gray-500">Date: {order.date}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Saved Cars */}
          <div className="bg-white p-6 rounded-lg shadow-2xl shadow-slate-900">
            <Link to={'/savedcars'} className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
              <FaHeart className="text-red-700 mr-2" />
              Saved Cars
            </Link>
            <ul className="space-y-4">
              {userData.savedCars.map((car, index) => (
                <li key={index} className="flex justify-between items-center border-b border-gray-500 pb-2">
                  <span className="text-black">{car.car}</span>
                  <span className="text-gray-500">Price: {car.price}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default UserProfile;
