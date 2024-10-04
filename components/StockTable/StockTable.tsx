import React, { FC, useState } from "react";
import CardItem from "../CardItem/CardItem";
import Pagination from "../Pagination/Pagination";

interface IStockTable {
  subHeaders: string[];
  filteredStocks: IStock[];
  showCheapest: boolean;
}

const StockTable: FC<IStockTable> = ({
  subHeaders,
  filteredStocks,
  showCheapest,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Calculate the stocks to display based on the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedStocks = showCheapest
    ? filteredStocks.slice(0, 5)
    : filteredStocks.slice(startIndex, startIndex + itemsPerPage);

  // Handle page change
  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <>
      <div className="grid gap-4">
        <div className="grid grid-cols-4 gap-4 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-sm font-medium text-gray-500 dark:text-gray-300">
          {subHeaders?.map((subheader, index) => (
            <div
              key={index}
              className={`${
                subheader.toLowerCase() === "code" ||
                subheader.toLowerCase() === "company"
                  ? "text-center"
                  : ""
              } ${subheader.toLowerCase() === "price" ? "text-right" : ""}`}
            >
              {subheader}
            </div>
          ))}
        </div>

        {displayedStocks.map((stock) => (
          <CardItem key={stock.id} {...stock} />
        ))}
      </div>
      {!showCheapest && (
        <Pagination
          displayedStocks={displayedStocks}
          filteredStocks={filteredStocks}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      )}
    </>
  );
};

export default StockTable;
