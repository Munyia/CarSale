import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '../components/Header';
import cars from '../data/carData'; // Import the car data
import { useCart } from '../context/CartContext'; // Adjust the path as needed


const CarDetail = () => {
  const { carId } = useParams(); // Get the car ID from the URL
  console.log("Car ID from URL:", carId); // Log carId to check its value
  const { addToCart } = useCart();

  const car = cars.find(c => c.id === parseInt(carId, 10)); // Find the car based on the ID
  console.log("Found Car:", car); // Log car to check if it's found

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
  const relatedCars = car.relatedCars.map((relatedCarId) => cars.find(c => c.id === relatedCarId));

  return (
    <div>
      <Header />
      <div className="bg-body">
        <div className="shadow-3xl py-5 bg-white px-10 bg--600 shadow-slate-900 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Image Gallery */}
          <div className="relative">
            <img
              src={car.images[currentImage]}
              alt={`Car ${car.make} ${car.model}`}
              className="w-full h-50 object-cover shadow-2xl shadow-slate-900 rounded-2xl"
            />
            <button onClick={handlePrevImage} className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-but hover:bg-white px-2 py-1 rounded-full">
              &#8249;
            </button>
            <button onClick={handleNextImage} className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-but hover:bg-white px-2 py-1 rounded-full">
              &#8250;
            </button>
          </div>

          {/* Car Specifications */}
          <div className="bg-body p-6 shadow-2xl shadow-slate-900 rounded-3xl ">
            <h1 className="text-lg font-bold mb-4">
              {car.make} {car.model} ({car.year})
            </h1>
            <ul className="space-y-2">
              <li><strong>Price:</strong> ${car.price.toLocaleString()}</li>
              <li><strong>Mileage:</strong> {car.mileage}</li>
              <li><strong>Engine Type:</strong> {car.engineType}</li>
              <li><strong>Fuel Type:</strong> {car.fuelType}</li>
              <li><strong>Transmission:</strong> {car.transmission}</li>
              <li><strong>Seating Capacity:</strong> {car.seatingCapacity}</li>
            </ul>

            {/* Installment Calculator */}
            <div className="mt-6">
              <h2 className="text-lg font-semibold mb-2">Installment Calculator</h2>
              <label htmlFor="months" className="block mb-1">Select Installment Plan (Months):</label>
              <select
                id="months"
                value={installmentMonths}
                onChange={(e) => setInstallmentMonths(e.target.value)}
                className="p-2 border border-but rounded"
              >
                <option value="6">6 months</option>
                <option value="12">12 months</option>
                <option value="24">24 months</option>
                <option value="36">36 months</option>
              </select>

              <p className="mt-3 text-lg">
                Estimated Monthly Payment: <strong>${monthlyPayment.toFixed(2)}</strong>
              </p>
            </div>

            {/* Buttons */}
            {/* <div className="mt-6 flex items-center gap-4">
              <div>
            <h1>{car.make} {car.model}</h1>
            <button className="px-4 py-2 bg-but hover:text-black text-white rounded-lg" onClick={handleAddToCart}>Add to Cart</button>
              </div>
              <Link to="/request" className="px-4 py-2 bg-but hover:text-black text-white rounded-lg">Request More Info</Link>
            </div> */}

            <div className="mt-6 flex gap-4 items-center">
  <div className="flex flex-grow items-center">
    <h1 className="text-xl font-bold">{car.make} {car.model}</h1>
  </div>
  <button className="px-4 py-2 bg-but hover:text-black text-white rounded-lg flex items-center justify-center"  onClick={handleAddToCart}>
    Add to Cart
  </button>
  <Link to="/request" className="px-4 py-2 bg-but hover:text-black text-white rounded-lg flex items-center justify-center">
    Request More Info
  </Link>
</div>

          </div>
        </div>

        {/* Related Cars */}
        <div className="mt-2 mb-4 px-4">
          <h2 className="text-2xl text-but font-semibold mb-2">Related Cars</h2>
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
            {relatedCars.map((relatedCar) => (
              <div key={relatedCar.id} className="bg-white p-4 rounded-2xl shadow-2xl shadow-slate-900 flex flex-col items-center">
                <img
                  src={relatedCar.images[0]} // Use the first image for the related car
                  alt={`Car ${relatedCar.make} ${relatedCar.model}`}
                  className="w-full h-15 shadow-2xl shadow-slate-900 object-cover rounded-3xl mb-2"
                />
                <h3 className="text-lg font-semibold">{relatedCar.make} {relatedCar.model} ({relatedCar.year})</h3>
                <p>Price: ${relatedCar.price.toLocaleString()}</p>
                <Link to={`/cars/${relatedCar.id}`} className="text-but hover:underline mt-1 block">View Details</Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetail;
