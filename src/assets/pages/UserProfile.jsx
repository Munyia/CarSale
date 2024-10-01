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
    <div className="bg-body dark:bg-gray-900 dark:text-white font-[verdana] min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl flex gap-10 bg--600 dark:bg-gray-800 dark:text-white bg-pry  mx-auto bg-white rounded-lg">
        
        {/* Profile Header */}
        <div className="flex flex-col text-center items-center  border border-gray-500 p-6 rounded-2xl font-[verdana] space-x-4 ">
          <div className="w-24 h-24 bg-body   rounded-full flex-shrink-0">
            <img 
              src="https://www.w3schools.com/w3images/avatar2.png" 
              alt="User Avatar" 
              className="w-full h-full items-center object-cover rounded-full" 
            />
          </div>
          <div>
            <h1 className="text-3xl font-[verdana] font-bold ">Welcome, {userData.name}</h1>
          </div>
            <p className="text-black dark:text-white">Your account summary and details</p>
        </div>
        
        {/* Dashboard Sections */}
        <div className="grid border border-gray-500 dark:bg-gray-900 dark:text-white p-5 rounded-3xl  grid-cols-1 md:grid-cols-3 gap-6">
          {/* Ongoing Installment Plans */}
          <div className="bg-white  dark:bg-gray-800 border-r-2 dark:text-white  p-6 rounded-lg">
            <h2 className="text-xl font-semibold font-[verdana] mb-4 text-black dark:text-white flex items-center">
              <FaCalendarAlt className="text-but mr-2 " />
              Ongoing Installment Plans
            </h2>
            <ul className="space-y-4">
              {userData.installmentPlans.map((plan, index) => (
                <li key={index} className="flex justify-between items-center border-b border-gray-500 pb-2">
                  <span className="text-black dark:text-white">{plan.car}</span>
                  <span className="text-gray-500 dark:text-white">Monthly: {plan.monthly}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Order History */}
          <div className="bg-white dark:bg-gray-800 border-r-2 dark:text-white p-6 rounded-lg ">
            <h2 className="text-xl dark:text-white font-semibold font-[verdana] mb-4 text-gray-800 flex items-center">
              <FaCar className="text-but mr-2" />
              Order History
            </h2>
            <ul className="space-y-4">
              {userData.orderHistory.map((order, index) => (
                <li key={index} className="flex justify-between items-center border-b border-gray-500 pb-2">
                  <span className="text-black dark:text-white">Purchased: {order.car}</span>
                  <span className="text-gray-500 dark:text-white">Date: {order.date}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Saved Cars */}
          <div className="bg-white p-6 dark:bg-gray-800  dark:text-white rounded-lg ">
            <h2 className="text-xl font-[verdana] font-semibold mb-4 text-gray-800 flex items-center">
              <FaHeart className="text-red-700 mr-2" />
              Saved Cars
            </h2>
            <ul className="space-y-4">
              {userData.savedCars.map((car, index) => (
                <li key={index} className="flex justify-between dark:text-white items-center border-b border-gray-500 pb-2">
                  <span className="text-black dark:text-white">{car.car}</span>
                  <span className="text-gray-500 dark:text-white">Price: {car.price}</span>
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
