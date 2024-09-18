import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import cars from '../data/cars'; 

const Auction = () => {
  return (
    <div>
      <Header />
      <section className="bg-body py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-but mb-4">Car Auctions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cars.map((car) => (
              <div key={car.id} className="bg-white p-6 rounded-3xl shadow hover:shadow-lg">
                <img 
                  src={car.image} 
                  alt={`${car.make} ${car.model}`} 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{car.make} {car.model}</h3>
                <p className="text-gray-700 mb-2">Year: {car.year}</p>
                <p className="text-gray-700 mb-2">Starting Bid: ${car.startingBid}</p>
                <p className="text-gray-700 mb-4">Current Bid: ${car.currentBid}</p>
                <p className="text-gray-700 mb-4">Time Remaining: {car.timeRemaining}</p>
                <button className="bg-but text-white px-6 py-2 rounded-lg hover:bg-white hover:text-but">
                  Place Bid
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Auction;
