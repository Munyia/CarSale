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
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Loan Calculator</h2>
      <div className="space-y-4">
        <input
          type="number"
          placeholder="Car Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="input-field"
        />
        <input
          type="number"
          placeholder="Down Payment"
          value={downPayment}
          onChange={(e) => setDownPayment(e.target.value)}
          className="input-field"
        />
        <input
          type="number"
          placeholder="Interest Rate (%)"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
          className="input-field"
        />
        <select
          value={months}
          onChange={(e) => setMonths(e.target.value)}
          className="input-field"
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

const Financing = () => {
  return (
    <div>
      <LoanCalculator />
    </div>
  );
};

export default Financing;
