import React, { FC } from "react";
import CardItem from "../CardItem/CardItem";
import Pagination from "../Pagination/Pagination";

interface IStockTable {
  subHeaders: string[];
  displayedStocks: IStock[];
  filteredStocks: IStock[];
}

const StockTable: FC<IStockTable> = ({
  subHeaders,
  displayedStocks,
  filteredStocks,
}) => {
  return (
    <>
      <div className="grid gap-4">
        <div className="grid grid-cols-4 gap-4 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-sm font-medium text-gray-500 dark:text-gray-300">
          {subHeaders?.map((subheader, index) => (
            <div key={index}>{subheader}</div>
          ))}
        </div>

        {displayedStocks.map((stock) => (
          <>
            <CardItem key={stock.id} {...stock} />
          </>
        ))}
      </div>
      <Pagination
        displayedStocks={displayedStocks}
        filteredStocks={filteredStocks}
      />
    </>
  );
};

export default StockTable;
