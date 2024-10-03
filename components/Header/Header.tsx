import React from "react";

const StockHeader: React.FC = () => {
  return (
    <div className="grid grid-cols-4 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-sm font-medium text-gray-500 dark:text-gray-300">
      <div>Name</div>
      <div>Company</div>
      <div>Code</div>
      <div>Price</div>
    </div>
  );
};

export default StockHeader;
