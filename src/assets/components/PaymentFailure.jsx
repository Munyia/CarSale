import React from "react";
import { Link } from "react-router-dom";

const PaymentFailure = () => {
  return (
    <div className="min-h-screen flex items-center dark:bg-gray-900 dark:text-white  justify-center bg-body p-2">
      {/* Main container for the payment failure message */}
      <div className="relative border border-gray-300 dark:bg-gray-800 dark:text-white  bg-pry px-3 pb-3 max-w-xs w-full mx-auto rounded-3xl sm:px-4 sm:py-4">
        {/* Title of the message */}
        <h1 className="text-lg font-[verdana] font-bold text-red-600 mb-2 text-center">
          Payment Failed
        </h1>

        {/* Message informing the user of the payment failure */}
        <p className="text-sm font-[dm] font-normal mb-2 text-center text-red-500">
          Unfortunately, your payment could not be processed. Please try again.
        </p>

        {/* Order Summary Section */}
        <div className="mb-2 font-[verdana] justify-center text-left ">
          <h2 className="text-sm font-[verdana] text-center font-semibold mb-1">Order Summary</h2>
          <p>
            <strong>Order Number:</strong> #123456789
          </p>
          <p>
            <strong>Date of Attempt:</strong> Sep 16, 2024
          </p>
          <p>
            <strong>Total Amount:</strong> $25,000.00
          </p>
        </div>

        {/* Payment Details Section */}
        <div className="mb-2 font-[verdana] justify-center text-left ">
        <h2 className="text-sm text-center font-semibold font-[verdana]  mb-1">
            Payment Details
          </h2>
          <p>
            <strong>Payment Method:</strong> Credit Card
          </p>
          <p>
            <strong>Transaction ID:</strong> N/A
          </p>
        </div>

        {/* Next Steps Section */}
        <div className="mb-2 font-[verdana] ">
          <h2 className="text-sm font-semibold font-[verdana] mb-1">Next Steps</h2>
          <p>
            Please check your payment details and try again. If the problem
            persists, contact our support team.
          </p>
          {/* Button to retry the payment */}
          <button className="mt-1 py-1 px-3 font-[verdana] bg-red-500 hover:text-black hover:bg-red-600 focus:ring-red-200 focus:ring-offset-red-400 text-white transition ease-in duration-150 text-center text-sm font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-md">
            Retry Payment
          </button>
        </div>

        {/* Navigation Links for further actions */}
        <div className="flex flex-col gap-3 sm:flex-row justify-between mt-3">
          {/* Link to return to the home page */}
          <Link
            to="/"
            className="py-1 px-3 bg-gray-800 font-[verdana] text-white hover:text-white hover:bg-gradient-to-r from-p1 via-p3 to-pk transition ease-in duration-150 text-center text-sm font-semibold rounded-md mb-2 sm:mb-0"
          >
            Return to Home
          </Link>
          {/* Link to contact support */}
          <Link
            to="/contact"
            className="py-1 px-3 font-[verdana] bg-gray-800 text-white hover:text-white hover:bg-gradient-to-r from-p1 via-p3 to-pk transition ease-in duration-150 text-center text-sm font-semibold rounded-md"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentFailure;
