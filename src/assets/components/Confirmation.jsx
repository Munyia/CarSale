import React from "react";
import { Link } from "react-router-dom";

const Confirmation = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-body p-2">
      <div className="relative shadow-md shadow-slate-700 bg-pry px-4 py-3 max-w-md w-full mx-auto rounded-3xl sm:px-4 sm:py-4">
        <h1 className="text-lg font-bold text-but mb-2 text-center">
          Payment Confirmation
        </h1>
        <p className="text-sm font-normal mb-2 text-center">
          Thank you for your purchase!
        </p>
        
        <div className="mb-3">
          <h2 className="text-sm font-semibold text-but mb-1">Order Summary</h2>
          <p><strong>Order Number:</strong> #123456789</p>
          <p><strong>Date:</strong> Sep 16, 2024</p>
          <p><strong>Total Amount:</strong> $25,000.00</p>
        </div>

        <div className="mb-3">
          <h2 className="text-sm font-semibold text-but mb-1">Payment Details</h2>
          <p><strong>Payment Method:</strong> Credit Card</p>
          <p><strong>Transaction ID:</strong> 9876543210</p>
        </div>

        <div className="mb-3">
          <h2 className="text-sm font-semibold text-but mb-1">Customer Information</h2>
          <p><strong>Name:</strong> John Doe</p>
          <p><strong>Email:</strong> john.doe@example.com</p>
          <p><strong>Phone:</strong> (123) 456-7890</p>
        </div>

        <div className="mb-3">
          <h2 className="text-sm font-semibold text-but mb-1">Shipping Information</h2>
          <p><strong>Address:</strong> *****</p>
          <p><strong>Delivery:</strong> Standard Shipping</p>
        </div>

        <div className="mb-3">
          <h2 className="text-sm font-semibold text-but mb-1">Next Steps</h2>
          <p>Your order is being processed. You will receive updates via email.</p>
          <button className="mt-1 py-1 px-3 bg-but hover:text-black hover:bg-blue-500 focus:ring-blue-200 focus:ring-offset-blue-400 text-white transition ease-in duration-150 text-center text-sm font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-md">
            Download Invoice
          </button>
        </div>

        <div className="flex flex-col sm:flex-row justify-between mt-3">
          <Link
            to="/"
            className="py-1 px-3 bg-but hover:text-black hover:bg-blue-500 text-white transition ease-in duration-150 text-center text-sm font-semibold rounded-md mb-2 sm:mb-0"
          >
            Return to Home
          </Link>
          <Link
            to="/orders"
            className="py-1 px-3 bg-but hover:text-black hover:bg-blue-500 text-white transition ease-in duration-150 text-center text-sm font-semibold rounded-md"
          >
            View My Orders
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
