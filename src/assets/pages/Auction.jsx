import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import cars from "../data/cars"; // Import the mock data

const Auction = () => {
  const [selectedCar, setSelectedCar] = useState(null);
  const [bidAmount, setBidAmount] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    document.title = "Car Auctions";
  }, []);

  const handleBidClick = (car) => {
    setSelectedCar(car);
    setBidAmount("");
    setError("");
    setMessage("");
  };

  const handleSubmitBid = () => {
    if (!bidAmount || isNaN(bidAmount) || Number(bidAmount) <= selectedCar.currentBid) {
      setError("Bid must be higher than the current bid.");
      setMessage("");
      return;
    }

    setTimeout(() => {
      setMessage("Bid placed successfully!");
      setError("");
      setSelectedCar(null);

      cars.map((car) =>
        car.id === selectedCar.id
          ? { ...car, currentBid: Number(bidAmount) }
          : car
      );
    }, 1000);
  };

  return (
    <div className="dark:bg-gray-800 dark:text-white">
      <section className="bg-body dark:bg-gray-900 dark:text-white py-5 px-4 md:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-[verdana] font-bold mb-4">Car Auctions</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cars.map((car) => (
              <div
                key={car.id}
                onClick={() => handleBidClick(car)}
                className="bg-white dark:bg-gray-800 dark:text-white font-[verdana] p-6 rounded-3xl transform transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
              >
                <img
                  src={car.image}
                  alt={`${car.make} ${car.model}`}
                  className="w-full h-48 object-cover rounded-lg mb-4 transform transition-transform duration-300 hover:scale-110"
                />
                <h3 className="text-xl font-semibold mb-2">
                  {car.make} {car.model}
                </h3>
                <p className="text-gray-700 dark:text-white mb-2">Year: {car.year}</p>
                <p className="text-gray-700 dark:text-white mb-2">
                  Starting Bid: ${car.startingBid}
                </p>
                <p className="text-gray-700 dark:text-white mb-2">
                  Current Bid: ${car.currentBid}
                </p>
                <button
  onClick={() => handleBidClick(car)}
  className="mt-4 px-4 py-2 bg-gray-800 text-white rounded-lg hover:text-white hover:bg-gradient-to-r from-p1 via-p3 to-pk hover:scale-105 transition-transform duration-300"
>
  Place Bid
</button>
              </div>
            ))}
          </div>

          {/* Bid Modal */}
          {selectedCar && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg max-w-md mx-auto">
                <h2 className="text-2xl font-semibold mb-4">Bid on {selectedCar.make} {selectedCar.model}</h2>
                <p className="mb-4">Current Bid: ${selectedCar.currentBid}</p>
                <input
                  type="number"
                  placeholder="Enter your bid"
                  value={bidAmount}
                  onChange={(e) => setBidAmount(e.target.value)}
                  className="w-full mb-4 p-2 border rounded-lg dark:bg-gray-900 dark:text-white"
                />
                {error && <p className="text-red-500 mb-4">{error}</p>}
                {message && <p className="text-green-500 mb-4">{message}</p>}
                <div className="flex justify-between">
                  <button
                    onClick={handleSubmitBid}
                    className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:text-white hover:bg-gradient-to-r from-p1 via-p3 to-pk"
                  >
                    Submit Bid
                  </button>
                  <button
                    onClick={() => setSelectedCar(null)}
                    className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Auction;
