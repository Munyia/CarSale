import React from "react";

const Loader = () => {
  return (
    <div className="flex-col py-2 gap-2 w-full flex items-center justify-center">
      {/* Outer spinner container */}
      <div className="w-10 h-10 border-4 border-transparent text-black text-4xl animate-spin flex items-center justify-center border-t-but rounded-full">
        {/* Inner spinner */}
        <div className="w-16 h-16 border-4 border-transparent text-green-700 text-2xl animate-spin flex items-center justify-center border-t-red-700 rounded-full"></div>
      </div>
    </div>
  );
};

export default Loader;
