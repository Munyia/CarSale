import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '../components/Header';
import cars from '../data/carData'; // Import the car data
import { useCart } from '../context/CartContext'; // Adjust the path as needed

const CarDetail = () => {
  const { carId } = useParams(); // Get the car ID from the URL
  const { addToCart } = useCart();

  const car = cars.find(c => c.id === parseInt(carId, 10)); // Find the car based on the ID

  // Set the page title
  useEffect(() => {
    document.title = 'Car Details';
  }, []);

  if (!car) {
    return <div>Car not found</div>; // Handle the case when the car is not found
  }

  const handleAddToCart = () => {
    addToCart(car);
  };

  const [currentImage, setCurrentImage] = useState(0);
  const [installmentMonths, setInstallmentMonths] = useState(12);

  // Calculate monthly payments
  const monthlyPayment = car.price / installmentMonths;

  const handlePrevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? car.images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentImage((prev) => (prev === car.images.length - 1 ? 0 : prev + 1));
  };

  // Find related cars by matching IDs
  const relatedCars = car.relatedCars.map((relatedCarId) =>
    cars.find(c => c.id === relatedCarId)
  );

  return (
    <div>
      <Header />
      <div className="bg-white">
        <div className="shadow-3xl py-4 bg-body px-4 lg:px-10 bg--600 shadow-slate-900 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Image Gallery */}
          <div className="relative">
            <img
              src={car.images[currentImage]}
              alt={`Car ${car.make} ${car.model}`}
              className="w-full object-cover shadow-2xl shadow-slate-900 rounded-2xl"
            />
            <button onClick={handlePrevImage} className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-but hover:bg-white px-2 py-1 rounded-full">
              &#8249;
            </button>
            <button onClick={handleNextImage} className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-but hover:bg-white px-2 py-1 rounded-full">
              &#8250;
            </button>
          </div>

          {/* Car Specifications */}
          <div className="bg-body p-3 shadow-2xl shadow-slate-900 rounded-3xl">
            <h1 className="text-lg font-bold mb-4">
              {car.make} {car.model} ({car.year})
            </h1>
            <ul className="space-y-1">
              <li><strong>Price:</strong> ${car.price.toLocaleString()}</li>
              <li><strong>Mileage:</strong> {car.mileage}</li>
              <li><strong>Engine Type:</strong> {car.engineType}</li>
              <li><strong>Fuel Type:</strong> {car.fuelType}</li>
              <li><strong>Transmission:</strong> {car.transmission}</li>
              <li><strong>Seating Capacity:</strong> {car.seatingCapacity}</li>
              <li><strong>Condition:</strong> {car.condition}</li>
            </ul>

            {/* Installment Calculator */}
            <div className="mt-6">
              <h2 className="text-lg font-semibold mb-1">Installment Calculator</h2>
              <label htmlFor="months" className="block mb-1">Select Installment Plan (Months):</label>
              <select
                id="months"
                value={installmentMonths}
                onChange={(e) => setInstallmentMonths(e.target.value)}
                className="p-2 border border-but rounded"
              >
                <option value="">Select Plan</option>
              <option value="1">1 Month</option>
              <option value="3">3 Months</option>
              <option value="6">6 Months</option>
              <option value="12">12 Months</option>
              </select>

              <p className="mt-3 text-lg">
                Estimated Monthly Payment: <strong>${monthlyPayment.toFixed(2)}</strong>
              </p>
            </div>

            <div className="mt-6 flex gap-4 items-center">
              <div className="flex flex-grow items-center">
                <h1 className="text-xl font-bold">{car.make} {car.model}</h1>
              </div>
              <button
                className="px-4 py-2 bg-but hover:text-black text-white rounded-lg flex items-center justify-center"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
              <Link to="/request" className="px-4 py-2 bg-but hover:text-black text-white rounded-lg flex items-center justify-center">
                Request More Info
              </Link>
            </div>
          </div>
        </div>

        {/* Related Cars */}
        <div className="mt-2 py-4 px-4 bg-but">
          <h2 className="text-2xl text-white font-semibold mb-2">Related Cars</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {relatedCars.map((relatedCar) => (
              <div key={relatedCar.id} className="bg-body p-4 rounded-2xl shadow-2xl shadow-slate-900 flex flex-col items-center">
                <img
                  src={relatedCar.images[0]} // Use the first image for the related car
                  alt={`Car ${relatedCar.make} ${relatedCar.model}`}
                  className="w-full h-32 sm:h-40 md:h-48 object-cover rounded-3xl mb-2"
                />
                <h3 className="text-lg font-semibold">{relatedCar.make} {relatedCar.model} ({relatedCar.year})</h3>
                <p>Price: ${relatedCar.price.toLocaleString()}</p>
                <Link to={`/cars/${relatedCar.id}`} className="text-but hover:underline mt-1 block">
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
