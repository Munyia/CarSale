import React from "react";

const ProgressBar = ({ currentStep, totalSteps }) => {
  const progressPercentage = (currentStep / (totalSteps - 1)) * 100;

  return (
    <div className="relative pt-1">
      <div className="flex items-center justify-between mb-2">
        {[...Array(totalSteps)].map((_, index) => (
          <div key={index} className="flex-1 text-center">
            <div
              className={`rounded-full w-4 h-4 mx-auto ${
                index <= currentStep ? "bg-gray-500" : "bg-gray-300"
              }`}
            ></div>
            <span className="text-xs">{index + 1}</span>
          </div>
        ))}
      </div>
      <div className="h-1 rounded bg-gray-300">
        <div
          className="h-full bg-gray-800"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
