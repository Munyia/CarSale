import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import cars from '../data/cars'; // Import the mock data

const Auction = () => {
  const [selectedCar, setSelectedCar] = useState(null);
  const [bidAmount, setBidAmount] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  // Set document title
  useEffect(() => {
    document.title = 'Car Auctions'; // Set the title to "Car Auctions"
  }, []);

  const handleBidClick = (car) => {
    setSelectedCar(car);
    setBidAmount(''); // Clear previous bid amount
    setError(''); // Clear previous errors
    setMessage(''); // Clear previous messages
  };

  const handleSubmitBid = () => {
    if (!bidAmount || isNaN(bidAmount) || Number(bidAmount) <= selectedCar.currentBid) {
      setError('Bid must be higher than the current bid.');
      setMessage(''); // Clear success message if error occurs
      return;
    }

    // Simulate submitting the bid to a server
    setTimeout(() => {
      setMessage('Bid placed successfully!');
      setError('');
      setSelectedCar(null);

      // Update the currentBid (in a real scenario, this would come from the backend)
      cars.map(car =>
        car.id === selectedCar.id
          ? { ...car, currentBid: Number(bidAmount) }
          : car
      );
    }, 1000);
  };

  return (
    <div>
      <Header />
      <section className="bg-body py-5 px-4 md:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-but mb-8">Car Auctions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                <button 
                  className="bg-but text-white px-6 py-2 rounded-lg  hover:bg-white hover:text-but transition duration-300"
                  onClick={() => handleBidClick(car)}
                >
                  Place Bid
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedCar && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg max-w-sm w-full">
            <h3 className="text-xl font-semibold mb-4">
              Place Your Bid for {selectedCar.make} {selectedCar.model}
            </h3>
            <input 
              type="number" 
              placeholder="Enter bid amount" 
              value={bidAmount} 
              onChange={(e) => setBidAmount(e.target.value)}
              className="border px-4 py-2 rounded-lg mb-4 w-full"
            />
            {error && <p className="text-red-500 mb-4">{error}</p>}
            {message && <p className="text-green-500 mb-4">{message}</p>}
            <div className="flex justify-end mt-4">
              <button 
                onClick={handleSubmitBid} 
                className="bg-but text-white px-4 py-2 rounded-lg hover:bg-white hover:text-but mr-2"
              >
                Submit Bid
              </button>
              <button 
                onClick={() => setSelectedCar(null)} 
                className="bg-gray-300 text-black px-4 py-2 rounded-lg hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Auction;
