import React, { useEffect } from "react";

const LoanCalculator = () => {
  useEffect(() => {
    document.title = "Financing";
  }, []);
  // const [price, setPrice] = useState(0);
  // const [downPayment, setDownPayment] = useState(0);
  // const [interestRate, setInterestRate] = useState(0);
  // const [months, setMonths] = useState(12);

  // const calculateMonthlyPayment = () => {
  //   const loanAmount = price - downPayment;
  //   const monthlyInterest = interestRate / 100 / 12;
  //   const monthlyPayment = (loanAmount * monthlyInterest) / (1 - Math.pow(1 + monthlyInterest, -months));
  //   return loanAmount > 0 ? monthlyPayment.toFixed(2) : '0.00';
  // };

 
};

const FinancingInfo = () => {
  return (
    <div className="bg-white text-left  dark:text-white dark:bg-gray-800 p-6 rounded-lg  mt-6">
      <div className="border mb-5 rounded-3xl p-5">
      <h2 className="text-xl font-semibold mb-4">What You Should Know Before Purchasing a Car</h2>
      <ul className="list-disc  pl-5 space-y-2">
        <li>Understand your budget and how much you can afford.</li>
        <li>Explore available financing options such as installment plans.</li>
        <li>Consider the total cost of ownership, including insurance and maintenance.</li>
        <li>Research the car's market value and compare prices.</li>
        <li>Check your credit score as it affects financing rates.</li>
      </ul> 
      </div>

      <div className="border mb-5 rounded-3xl p-5">
      <h2 className="text-xl font-semibold mb-4 mt-6">Available Options</h2>
      <p>Our platform offers various options to make car purchasing easier:</p>
      <ul className="list-disc border pl-5 space-y-2">
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
      </div>

      <div className="border mb-5 rounded-3xl p-5">
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
