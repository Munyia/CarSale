import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "../components/Header";

const CheckOut = () => {
  // Access the location state to retrieve totalCost and selectedItems
  const location = useLocation();
  const { totalCost, selectedItems } = location.state || {};

  // State variables for managing form inputs and calculations
  const [downPayment, setDownPayment] = useState(0); // Amount for down payment
  const [installmentPlan, setInstallmentPlan] = useState(""); // Selected installment plan
  const [deliveryOption, setDeliveryOption] = useState(""); // Delivery method
  const [monthlyInstallment, setMonthlyInstallment] = useState(0); // Monthly installment amount
  const [paymentMethod, setPaymentMethod] = useState(""); // Selected payment method

  // Set the document title when the component mounts
  useEffect(() => {
    document.title = "Checkout - Car Dealer";
  }, []);

  // Function to calculate the monthly installment based on the selected plan and down payment
  const calculateInstallment = (plan, downPayment) => {
    if (plan && totalCost) {
      const remainingAmount = totalCost - parseFloat(downPayment || 0); // Calculate remaining amount
      setMonthlyInstallment(remainingAmount / parseInt(plan)); // Calculate and set monthly installment
    }
  };

  // Function to handle payment confirmation and navigate accordingly
  const handlePayment = () => {
    const paymentSuccess = true; // Placeholder for actual payment processing logic

    if (paymentSuccess) {
      navigate("/confirmation"); // Navigate to confirmation page on success
    } else {
      navigate("/payment-failure"); // Navigate to failure page if payment fails
    }
  };

  return (
    <div className="bg-body">
      <Header />
      <div className="max-w-lg my-3 mx-auto p-6 shadow-2xl bg-body shadow-slate-900 rounded-3xl sm:max-w-xl lg:max-w-lg">
        <h1 className="text-2xl font-bold justify-center text-center mb-6 text-but">
          Checkout Form
        </h1>
        <form className="space-y-4">
          {/* Input for Full Name */}
          <div>
            <label
              htmlFor="fullname"
              className="block text-sm font-semibold text-but mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullname"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Input for Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-but mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Input for Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-but mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Input for Phone Number */}
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-semibold text-but mb-2"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Input for Address */}
          <div>
            <label
              htmlFor="address"
              className="block text-sm font-semibold text-but mb-2"
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Dropdown for Country Selection */}
          <div>
            <label
              htmlFor="country"
              className="block text-sm font-semibold text-but mb-2"
            >
              Country
            </label>
            <select
              id="country"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="" disabled selected>
                Select your country
              </option>
              <option value="usa">United States</option>
              <option value="canada">Canada</option>
              <option value="uk">United Kingdom</option>
              <option value="australia">Australia</option>
            </select>
          </div>

          {/* Section for Payment Method */}
          <div className="mt-6">
            <p className="text-lg font-semibold text-black">Payment Method</p>
          </div>

          {/* Dropdown for Installment Plan Selection */}
          <div>
            <label htmlFor="installment" className="block text-but">
              Installment Plan
            </label>
            <select
              id="installment"
              name="installment"
              className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 text-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              value={installmentPlan}
              onChange={(e) => {
                setInstallmentPlan(e.target.value); // Update installment plan
                calculateInstallment(e.target.value, downPayment); // Recalculate installment
              }}
              required
            >
              <option value="">Select Plan</option>
              <option value="1">1 Month</option>
              <option value="3">3 Months</option>
              <option value="6">6 Months</option>
              <option value="12">12 Months</option>
            </select>
          </div>

          {/* Input for Down Payment, shown if an installment plan is selected */}
          {installmentPlan && (
            <div>
              <label
                htmlFor="downPayment"
                className="block text-sm font-semibold text-but mb-2"
              >
                Down Payment
              </label>
              <input
                type="number"
                id="downPayment"
                value={downPayment}
                onChange={(e) => {
                  setDownPayment(e.target.value); // Update down payment
                  calculateInstallment(installmentPlan, e.target.value); // Recalculate installment
                }}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter down payment amount"
              />
            </div>
          )}

          {/* Payment Method Options */}
          <div className="mt-6 space-y-4">
            <div className="flex items-center">
              <input
                type="radio"
                id="bankTransfer"
                name="paymentMethod"
                value="Bank Transfer"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                onChange={() => setPaymentMethod("Bank Transfer")} // Update selected payment method
                required
              />
              <label htmlFor="bankTransfer" className="ml-2 text-gray-700">
                Bank Transfer
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="crypto"
                name="paymentMethod"
                value="Cryptocurrency"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                onChange={() => setPaymentMethod("Cryptocurrency")}
                required
              />
              <label htmlFor="crypto" className="ml-2 text-gray-700">
                Cryptocurrency
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="creditCard"
                name="paymentMethod"
                value="Credit Card"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                onChange={() => setPaymentMethod("Credit Card")}
                required
              />
              <label htmlFor="creditCard" className="ml-2 text-gray-700">
                Credit Card
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="paypal"
                name="paymentMethod"
                value="PayPal"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                onChange={() => setPaymentMethod("PayPal")}
                required
              />
              <label htmlFor="paypal" className="ml-2 text-gray-700">
                PayPal
              </label>
            </div>
          </div>

          {/* Section for Delivery Options */}
          <div className="mt-6">
            <p className="text-lg font-semibold text-black">Delivery Option</p>
            <div className="mt-4 space-y-4">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="homeDelivery"
                  name="deliveryOption"
                  value="Home Delivery"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                  onChange={() => setDeliveryOption("Home Delivery")}
                  required
                />
                <label htmlFor="homeDelivery" className="ml-2 text-gray-700">
                  Home Delivery
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="pickup"
                  name="deliveryOption"
                  value="Pickup"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                  onChange={() => setDeliveryOption("Pickup")}
                  required
                />
                <label htmlFor="pickup" className="ml-2 text-gray-700">
                  Pickup
                </label>
              </div>
            </div>
          </div>

          {/* Display Monthly Installment if applicable */}
          {installmentPlan && (
            <div>
              <p className="text-xl font-bold text-but mt-4">
                Monthly Installment: ${monthlyInstallment.toFixed(2)}{" "}
                {/* Display calculated monthly installment */}
              </p>
            </div>
          )}

          {/* Button to confirm the order */}
          <div className="mt-6 flex justify-center">
            <button
              type="button"
              onClick={handlePayment} // Handle payment process on click
              className="px-6 py-2 bg-blue-600 text-white rounded-lg"
            >
              Confirm Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckOut;
