import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";
import cars from "../data/carData"; // Import the car data
import { useCart } from "../context/CartContext"; // Import the CartContext

const CarDetail = () => {
  const { carId } = useParams(); // Get the car ID from the URL
  const { addToCart } = useCart(); // Destructure addToCart from the CartContext

  // Find the car object by matching the ID from the URL
  const car = cars.find((c) => c.id === parseInt(carId, 10));

  // Set the page title when the component mounts
  useEffect(() => {
    document.title = "Car Details";
  }, []);

  // Render a message if the car is not found
  if (!car) {
    return <div>Car not found</div>;
  }

  const handleAddToCart = () => {
    addToCart(car); // Add the selected car to the cart
  };

  const [currentImage, setCurrentImage] = useState(0); // Manage the current image index
  const [installmentMonths, setInstallmentMonths] = useState(12); // Manage installment months

  // Calculate monthly payments based on selected installment plan
  const monthlyPayment = car.price / installmentMonths;

  // Function to go to the previous image in the gallery
  const handlePrevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? car.images.length - 1 : prev - 1));
  };

  // Function to go to the next image in the gallery
  const handleNextImage = () => {
    setCurrentImage((prev) => (prev === car.images.length - 1 ? 0 : prev + 1));
  };

  // Find related cars based on IDs stored in the selected car's relatedCars property
  const relatedCars = car.relatedCars.map((relatedCarId) =>
    cars.find((c) => c.id === relatedCarId)
  );

  return (
    <div className="font-[dm] bg-body">
      <div className="bg-white">
        <div className="shadow-3xl py-4 bg-body px-4 lg:px-10 bg--600 shadow-slate-900 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Image Gallery */}
          <div className="relative">
            <img
              src={car.images[currentImage]} // Display the current image
              alt={`Car ${car.make} ${car.model}`} // Alt text for accessibility
              className="w-full object-cover shadow-2xl shadow-slate-900 rounded-2xl"
            />
            {/* Navigation buttons for the image gallery */}
            <button
              onClick={handlePrevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-but hover:bg-white px-2 py-1 rounded-full"
            >
              &#8249; {/* Left arrow */}
            </button>
            <button
              onClick={handleNextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-but hover:bg-white px-2 py-1 rounded-full"
            >
              &#8250; {/* Right arrow */}
            </button>
          </div>

          {/* Car Specifications Section */}
          <div className="bg-body p-3 shadow-2xl shadow-slate-900 rounded-3xl">
            <h1 className="text-lg font-[roboto] font-bold mb-4">
              {car.make} {car.model} ({car.year}) {/* Display car details */}
            </h1>
            <ul className="space-y-1">
              <li>
                <strong>Price:</strong> ${car.price.toLocaleString()}
              </li>
              <li>
                <strong>Mileage:</strong> {car.mileage}
              </li>
              <li>
                <strong>Engine Type:</strong> {car.engineType}
              </li>
              <li>
                <strong>Fuel Type:</strong> {car.fuelType}
              </li>
              <li>
                <strong>Transmission:</strong> {car.transmission}
              </li>
              <li>
                <strong>Seating Capacity:</strong> {car.seatingCapacity}
              </li>
              <li>
                <strong>Condition:</strong> {car.condition}
              </li>
            </ul>

            {/* Installment Calculator */}
            <div className="mt-6">
              <h2 className="text-lg font-[roboto] font-semibold mb-1">
                Installment Calculator
              </h2>
              <label htmlFor="months" className="block mb-1">
                Select Installment Plan (Months):
              </label>
              <select
                id="months"
                value={installmentMonths} // Controlled component for installment months
                onChange={(e) => setInstallmentMonths(e.target.value)} // Update state on change
                className="p-2 border border-but rounded"
              >
                <option value="">Select Plan</option>
                <option value="1">1 Month</option>
                <option value="3">3 Months</option>
                <option value="6">6 Months</option>
                <option value="12">12 Months</option>
              </select>

              <p className="mt-3 text-lg">
                Estimated Monthly Payment:{" "}
                <strong>${monthlyPayment.toFixed(2)}</strong>{" "}
                {/* Display monthly payment */}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 flex gap-4 items-center">
              <div className="flex flex-grow items-center">
                <h1 className="text-xl font-[roboto] font-bold">
                  {car.make} {car.model}
                </h1>
              </div>
              <button
                className="px-4 py-2 bg-but font-[open] hover:text-black text-white rounded-lg flex items-center justify-center"
                onClick={handleAddToCart} // Add car to cart on click
              >
                Add to Cart
              </button>
              <Link
                to="/request"
                className="px-4 py-2 bg-but font-[open] hover:text-black text-white rounded-lg flex items-center justify-center"
              >
                Request More Info
              </Link>
            </div>
          </div>
        </div>

        {/* Related Cars Section */}
        <div className=" py-4 px-4 font-[dm] bg-gray-400">
          <h2 className="text-2xl text-white font-[roboto] font-semibold mb-2">
            Related Cars
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {relatedCars.map((relatedCar) => (
              <div
                key={relatedCar.id}
                className="bg-body p-4 rounded-2xl shadow-2xl shadow-slate-900 flex flex-col items-center"
              >
                <img
                  src={relatedCar.images[0]} // Display the first image of the related car
                  alt={`Car ${relatedCar.make} ${relatedCar.model}`} // Alt text for accessibility
                  className="w-full h-32 sm:h-40 md:h-48 object-cover rounded-3xl mb-2"
                />
                <h3 className="text-lg font-semibold">
                  {relatedCar.make} {relatedCar.model} ({relatedCar.year})
                </h3>
                <p>Price: ${relatedCar.price.toLocaleString()}</p>
                <Link
                  to={`/cars/${relatedCar.id}`}
                  className="text-white hover:bg-but hover:text-black p-2 rounded-lg font-[open] bg-but hover:underline mt-1 block"
                >
                  View Details
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetail;
