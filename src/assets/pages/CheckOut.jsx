import React from 'react';

const CheckOut = () => {
  return (
    <div className="max-w-lg my-3 mx-auto p-6 shadow-2xl  bg-white shadow-slate-900 rounded-3xl">
      <h1 className="text-2xl font-bold justify-center text-center mb-6 text-gray-800">CheckOut Form</h1>
      <form className="space-y-4">
        <div>
          <label htmlFor="fullname" className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
          <input
            type="text"
            id="fullname"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
          <input
            type="email"
            id="email"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
          <input
            type="password"
            id="password"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
          <input
            type="tel"
            id="phone"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="address" className="block text-sm font-semibold text-gray-700 mb-2">Address</label>
          <input
            type="text"
            id="address"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="country" className="block text-sm font-semibold text-gray-700 mb-2">Country</label>
          <select
            id="country"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="" disabled selected>Select your country</option>
            <option value="usa">United States</option>
            <option value="canada">Canada</option>
            <option value="uk">United Kingdom</option>
            <option value="australia">Australia</option>
          </select>
        </div>
        <div className="mt-6">
          <div className="text-lg font-semibold text-gray-800">Payment Method</div>
          {/* <div className="mt-6 border-t border-gray-300 pt-4">
          <div className="text-lg font-semibold text-gray-800 mb-2">Down Payment</div>
          <input
            type="number"
            id="downPayment"
            className="w-full border border-blue-500 rounded-lg px-3 py-2 text-sm bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter down payment amount"
       
          />
        </div> */}

          <div className="mt-6">
          <div className="mt-4 space-y-4">
            <div className="flex items-center">
              <input
                type="radio"
                id="bankTransfer"
                name="paymentMethod"
                value="bankTransfer"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                required
              />
              <label htmlFor="bankTransfer" className="ml-2 text-gray-700">Bank Transfer</label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="crypto"
                name="paymentMethod"
                value="crypto"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                required
              />
              <label htmlFor="crypto" className="ml-2 text-gray-700">Cryptocurrency</label>
            </div>
          </div>
        </div>
          <div className="mt-4 space-y-4">
            <div className="flex items-center">
              <input
                type="radio"
                id="creditCard"
                name="paymentMethod"
                value="creditCard"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                required
              />
              <label htmlFor="creditCard" className="ml-2 text-gray-700">Credit Card</label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="paypal"
                name="paymentMethod"
                value="paypal"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                required
              />
              <label htmlFor="paypal" className="ml-2 text-gray-700">PayPal</label>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <label htmlFor="installment" className="block text-gray-700">Installment Plan</label>
          <select
            id="installment"
            name="installment"
            className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 text-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          >
            <option value="">Select Plan</option>
            <option value="1">1 Month</option>
            <option value="3">3 Months</option>
            <option value="6">6 Months</option>
            <option value="12">12 Months</option>
          </select>
        </div>

        <div className="mt-6">
          <div className="text-lg font-semibold text-gray-800">Delivery Options</div>
          <div className="mt-4 space-y-4">
            <div className="flex items-center">
              <input
                type="radio"
                id="homeDelivery"
                name="deliveryOption"
                value="homeDelivery"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                required
              />
              <label htmlFor="homeDelivery" className="ml-2 text-gray-700">Home Delivery</label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="pickup"
                name="deliveryOption"
                value="pickup"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                required
              />
              <label htmlFor="pickup" className="ml-2 text-gray-700">Pickup</label>
            </div>
          </div>
        </div>


        <div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckOut;
