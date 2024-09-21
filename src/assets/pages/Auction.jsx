import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import cars from "../data/cars"; // Import the mock data

const Auction = () => {
  // State to hold the selected car, bid amount, error messages, and success messages
  const [selectedCar, setSelectedCar] = useState(null);
  const [bidAmount, setBidAmount] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  // Effect to set the document title when the component mounts
  useEffect(() => {
    document.title = "Car Auctions"; // Set the title to "Car Auctions"
  }, []);

  // Function to handle clicking on a car to place a bid
  const handleBidClick = (car) => {
    setSelectedCar(car); // Set the selected car
    setBidAmount(""); // Clear previous bid amount
    setError(""); // Clear previous errors
    setMessage(""); // Clear previous messages
  };

  // Function to handle the bid submission
  const handleSubmitBid = () => {
    // Validate the bid amount
    if (
      !bidAmount ||
      isNaN(bidAmount) ||
      Number(bidAmount) <= selectedCar.currentBid
    ) {
      setError("Bid must be higher than the current bid."); // Set error message
      setMessage(""); // Clear success message if error occurs
      return;
    }

    // Simulate submitting the bid to a server
    setTimeout(() => {
      setMessage("Bid placed successfully!"); // Set success message
      setError(""); // Clear any error messages
      setSelectedCar(null); // Deselect the car after bidding

      // Update the currentBid for the selected car (simulated)
      cars.map((car) =>
        car.id === selectedCar.id
          ? { ...car, currentBid: Number(bidAmount) } // Update current bid
          : car
      );
    }, 1000); // Simulate network delay
  };

  return (
    <div className="dark:bg-gray-800 dark:text-white">
      <section className="bg-body dark:bg-gray-900 dark:text-white shadow-2xl  shadow-slate-900 py-5 px-4 md:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-[roboto] font-bold text-but mb-4">Car Auctions</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cars.map((car) => (
              <div
                key={car.id}
                className="bg-white dark:bg-gray-800 dark:text-white  font-[dm] shadow-2xl shadow-slate-900 p-6 rounded-3xl  hover:shadow-lg"
              >
                <img
                  src={car.image}
                  alt={`${car.make} ${car.model}`}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">
                  {car.make} {car.model}
                </h3>
                <p className="text-gray-700 dark:text-white mb-2">Year: {car.year}</p>
                <p className="text-gray-700 dark:text-white mb-2">
                  Starting Bid: ${car.startingBid}
                </p>
                <p className="text-gray-700 dark:text-white mb-4">
                  Current Bid: ${car.currentBid}
                </p>
                <p className="text-gray-700 dark:text-white mb-4">
                  Time Remaining: {car.timeRemaining}
                </p>
                <button
                  className="bg-but text-white font-[open] px-6 py-2 rounded-lg hover:bg-white hover:text-but transition duration-300"
                  onClick={() => handleBidClick(car)} // Handle bid click
                >
                  Place Bid
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Conditional rendering of the bid modal if a car is selected */}
      {selectedCar && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg max-w-sm w-full">
            <h3 className="text-xl font-[dm] font-semibold mb-4">
              Place Your Bid for {selectedCar.make} {selectedCar.model}
            </h3>
            <input
              type="number"
              placeholder="Enter bid amount"
              value={bidAmount}
              onChange={(e) => setBidAmount(e.target.value)} // Update bid amount on change
              className="border px-4 py-2 rounded-lg mb-4 w-full"
            />
            {error && <p className="text-red-500 font-[open] mb-4">{error}</p>}{" "}
            {/* Show error message if present */}
            {message && <p className="text-green-500 font-[open] mb-4">{message}</p>}{" "}
            {/* Show success message if present */}
            <div className="flex justify-end mt-4">
              <button
                onClick={handleSubmitBid} // Handle bid submission
                className="bg-but font-[open] text-white px-4 py-2 rounded-lg hover:bg-white hover:text-but mr-2"
              >
                Submit Bid
              </button>
              <button
                onClick={() => setSelectedCar(null)} // Cancel and close the modal
                className="bg-gray-300 font-[open] text-black px-4 py-2 rounded-lg hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Auction;
