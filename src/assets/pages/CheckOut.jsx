import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Header from '../components/Header';

const CheckOut = () => {
  const location = useLocation();
  const { totalCost, selectedItems } = location.state || {}; 

  const [downPayment, setDownPayment] = useState(0);
  const [installmentPlan, setInstallmentPlan] = useState('');
  const [deliveryOption, setDeliveryOption] = useState('');
  const [monthlyInstallment, setMonthlyInstallment] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState('');

  useEffect(() => {
    document.title = 'Checkout - Car Dealer';
  }, []);

  const calculateInstallment = (plan, downPayment) => {
    if (plan && totalCost) {
      const remainingAmount = totalCost - parseFloat(downPayment || 0);
      setMonthlyInstallment(remainingAmount / parseInt(plan));
    }
  };

  const handlePayment = () => {
    const paymentSuccess = true; 

    if (paymentSuccess) {
      navigate('/confirmation'); 
    } else {
      navigate('/payment-failure'); 
    }
  };
  return (
    <div className='bg-body'>
      <Header />
      <div className="max-w-lg my-3 mx-auto p-6 shadow-2xl bg-body shadow-slate-900 rounded-3xl sm:max-w-xl lg:max-w-lg">
        <h1 className="text-2xl font-bold justify-center text-center mb-6 text-but">Checkout Form</h1>
        <form className="space-y-4">
          <div>
            <label htmlFor="fullname" className="block text-sm font-semibold text-but mb-2">Full Name</label>
            <input
              type="text"
              id="fullname"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-but mb-2">Email</label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-semibold text-but mb-2">Password</label>
            <input
              type="password"
              id="password"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-but mb-2">Phone Number</label>
            <input
              type="tel"
              id="phone"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="address" className="block text-sm font-semibold text-but mb-2">Address</label>
            <input
              type="text"
              id="address"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="country" className="block text-sm font-semibold text-but mb-2">Country</label>
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
            <p className="text-lg font-semibold text-black">Payment Method</p>
          </div>
          <div>
            <label htmlFor="installment" className="block text-but">Installment Plan</label>
            <select
              id="installment"
              name="installment"
              className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 text-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              value={installmentPlan}
              onChange={(e) => {
                setInstallmentPlan(e.target.value);
                calculateInstallment(e.target.value, downPayment);
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

          {installmentPlan && (
            <div>
              <label htmlFor="downPayment" className="block text-sm font-semibold text-but mb-2">Down Payment</label>
              <input
                type="number"
                id="downPayment"
                value={downPayment}
                onChange={(e) => {
                  setDownPayment(e.target.value);
                  calculateInstallment(installmentPlan, e.target.value);
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
                onChange={() => setPaymentMethod('Bank Transfer')}
                required
              />
              <label htmlFor="bankTransfer" className="ml-2 text-gray-700">Bank Transfer</label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="crypto"
                name="paymentMethod"
                value="Cryptocurrency"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                onChange={() => setPaymentMethod('Cryptocurrency')}
                required
              />
              <label htmlFor="crypto" className="ml-2 text-gray-700">Cryptocurrency</label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="creditCard"
                name="paymentMethod"
                value="Credit Card"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                onChange={() => setPaymentMethod('Credit Card')}
                required
              />
              <label htmlFor="creditCard" className="ml-2 text-gray-700">Credit Card</label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="paypal"
                name="paymentMethod"
                value="PayPal"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                onChange={() => setPaymentMethod('PayPal')}
                required
              />
              <label htmlFor="paypal" className="ml-2 text-gray-700">PayPal</label>
            </div>
          </div>

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
                  onChange={() => setDeliveryOption('Home Delivery')}
                  required
                />
                <label htmlFor="homeDelivery" className="ml-2 text-gray-700">Home Delivery</label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="pickup"
                  name="deliveryOption"
                  value="Pickup"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                  onChange={() => setDeliveryOption('Pickup')}
                  required
                />
                <label htmlFor="pickup" className="ml-2 text-gray-700">Pickup</label>
              </div>
            </div>
          </div>

          {installmentPlan && (
            <div>
              <p className="text-xl font-bold text-but mt-4">
                Monthly Installment: ${monthlyInstallment.toFixed(2)}
              </p>
            </div>
          )}

          <div className="mt-6 flex justify-center">
          <button
              type="button"
              onClick={handlePayment} 
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
