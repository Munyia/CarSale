import React, { useState } from 'react';

const LoanCalculator = () => {
  const [price, setPrice] = useState(0);
  const [downPayment, setDownPayment] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [months, setMonths] = useState(12);

  const calculateMonthlyPayment = () => {
    const loanAmount = price - downPayment;
    const monthlyInterest = interestRate / 100 / 12;
    const monthlyPayment = (loanAmount * monthlyInterest) / (1 - Math.pow(1 + monthlyInterest, -months));
    return loanAmount > 0 ? monthlyPayment.toFixed(2) : '0.00';
  };

  return (
    <div className="bg-white text-black dark:bg-gray-800 p-6 rounded-lg shadow-lg">
    <h2 className="text-xl font-semibold mb-4">Loan Calculator</h2>
    <div className="space-y-4">
      <input
        type="number"
        placeholder="Car Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="input-field text-black placeholder-gray-500 dark:placeholder-gray-400" // Adjust placeholder color
      />
      <input
        type="number"
        placeholder="Down Payment"
        value={downPayment}
        onChange={(e) => setDownPayment(e.target.value)}
        className="input-field text-black placeholder-gray-500 dark:placeholder-gray-400" // Adjust placeholder color
      />
      <input
        type="number"
        placeholder="Interest Rate (%)"
        value={interestRate}
        onChange={(e) => setInterestRate(e.target.value)}
        className="input-field text-black placeholder-gray-500 dark:placeholder-gray-400" // Adjust placeholder color
      />
      <select
        value={months}
        onChange={(e) => setMonths(e.target.value)}
        className="input-field text-black placeholder-gray-500 dark:placeholder-gray-400" // Adjust placeholder color
      >
        <option value={12}>12 months</option>
        <option value={24}>24 months</option>
        <option value={36}>36 months</option>
      </select>
    </div>
    <p className="mt-4">Monthly Payment: ${calculateMonthlyPayment()}</p>
  </div>
  
  );
};

const FinancingInfo = () => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mt-6">
      <h2 className="text-xl font-semibold mb-4">What You Should Know Before Purchasing a Car</h2>
      <ul className="list-disc pl-5 space-y-2">
        <li>Understand your budget and how much you can afford.</li>
        <li>Explore available financing options such as installment plans.</li>
        <li>Consider the total cost of ownership, including insurance and maintenance.</li>
        <li>Research the car's market value and compare prices.</li>
        <li>Check your credit score as it affects financing rates.</li>
      </ul>

      <h2 className="text-xl font-semibold mb-4 mt-6">Available Options</h2>
      <p>Our platform offers various options to make car purchasing easier:</p>
      <ul className="list-disc pl-5 space-y-2">
        <li>
          <strong>Installment Plans:</strong> Flexible payment options tailored to fit your budget.
        </li>
        <li>
          <strong>Auction Sales:</strong> Participate in auctions to find great deals on cars.
        </li>
        <li>
          <strong>Financing Assistance:</strong> Get help from our experts to choose the best financing plan.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mb-4 mt-6">After Purchase</h2>
      <p>
        After purchasing your car, consider these tips:
      </p>
      <ul className="list-disc pl-5 space-y-2">
        <li>Keep all documents related to your purchase and financing.</li>
        <li>Follow up on your installment plan payments to avoid penalties.</li>
        <li>Regularly maintain your car to keep it in good condition.</li>
      </ul>
    </div>
  );
};

const Financing = () => {
  return (
    <div className="p-5">
      <LoanCalculator />
      <FinancingInfo />
    </div>
  );
};

export default Financing;
