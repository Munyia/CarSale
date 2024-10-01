import React from "react";
import { Link } from "react-router-dom";

// The Confirmation component displays a payment confirmation page after a successful purchase.
const Confirmation = () => {
  return (
    <div className="min-h-screen dark:bg-gray-900 dark:text-white  flex  bg-body p-5">
      {/* Main container for the confirmation content, with styling for background, shadow, and padding */}
      <div className="relative dark:bg-gray-800 dark:text-white  border bg-pry px-4 py-3 max-w-md w-full mx-auto rounded-3xl sm:px-4 sm:py-4">
        {/* Title for the confirmation page */}
        <h1 className="text-lg font-[roboto] font-bold  mb-2 text-center">
          Payment Confirmation
        </h1>

        {/* Message thanking the user for their purchase */}
        <p className="text-sm font-[verdana] font-normal mb-2 text-center">
          Thank you for your purchase!
        </p>

        {/* Section displaying the order summary */}
        <div className="mb-3 justify-start text-left font-[verdana]">
          <h2 className="text-sm font-[verdana] font-semibold mb-1">Order Summary</h2>
          <p>
            <strong>Order Number:</strong> #123456789
          </p>
          <p>
            <strong>Date:</strong> Sep 16, 2024
          </p>
          <p>
            <strong>Total Amount:</strong> $25,000.00
          </p>
        </div>

        {/* Section displaying the payment details */}
        <div className="mb-3 justify-start text-left font-[verdana]">
        <h2 className="text-sm font-semibold mb-1">
            Payment Details
          </h2>
          <p>
            <strong>Payment Method:</strong> Credit Card
          </p>
          <p>
            <strong>Transaction ID:</strong> 9876543210
          </p>
        </div>

        {/* Section displaying customer information */}
        <div className="mb-3 justify-start text-left font-[verdana]">
          <h2 className="text-sm font-semibold t mb-1">
            Customer Information
          </h2>
          <p>
            <strong>Name:</strong> John Doe
          </p>
          <p>
            <strong>Email:</strong> john.doe@example.com
          </p>
          <p>
            <strong>Phone:</strong> (123) 456-7890
          </p>
        </div>

        {/* Section displaying shipping information */}
        <div className="mb-3 justify-start text-left font-[verdana]">
        <h2 className="text-sm font-semibold mb-1">
            Shipping Information
          </h2>
          <p>
            <strong>Address:</strong> *****
          </p>{" "}
          {/* Masked address for privacy */}
          <p>
            <strong>Delivery:</strong> Standard Shipping
          </p>
        </div>

        {/* Section displaying next steps after purchase */}
        <div className="mb-3  font-[verdana]">
        <h2 className="text-sm font-semibold  mb-1">Next Steps</h2>
          <p>
            Your order is being processed. You will receive updates via email.
          </p>

          {/* Button to download the invoice */}
          <button className="mt-1 py-1 px-3 font-[verdana] bg-gray-800 hover:text-white hover:bg-gradient-to-r from-p1 via-p3 to-pk focus:ring-blue-200 focus:ring-offset-blue-400 text-white transition ease-in duration-150 text-center text-sm font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-md">
            Download Invoice
          </button>
        </div>

        {/* Links to return to home or view order history */}
        <div className="flex font-[verdana] flex-col sm:flex-row justify-between mt-3">
          <Link
            to="/"
            className="py-1 px-3 bg-gray-800 hover:text-white hover:bg-gradient-to-r from-p1 via-p3 to-pk text-white transition ease-in duration-150 text-center text-sm font-semibold rounded-md mb-2 sm:mb-0"
          >
            Return to Home
          </Link>
          <Link
            to="/orders"
            className="py-1 px-3 bg-gray-800 hover:text-white hover:bg-gradient-to-r from-p1 via-p3 to-pk text-white transition ease-in duration-150 text-center text-sm font-semibold rounded-md"
          >
            View My Orders
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
