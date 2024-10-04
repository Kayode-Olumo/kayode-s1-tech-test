import React from "react";
import { Button } from "@/components/ui/button";

interface IPagination {
  displayedStocks: IStock[];
  filteredStocks: IStock[];
  currentPage: number;
  onPageChange: (newPage: number) => void;
}

const Pagination: React.FC<IPagination> = ({
  displayedStocks,
  filteredStocks,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(filteredStocks.length / 10);
  const hasMultiplePages = filteredStocks.length > 10;

  const pageButtons = [];
  for (let i = 1; i <= totalPages; i++) {
    pageButtons.push(
      <Button
        key={i}
        variant="ghost"
        size="sm"
        onClick={() => onPageChange(i)}
        disabled={i === currentPage}
        className={`text-gray-400 dark:text-gray-500 ${
          i === currentPage ? "bg-gray-200" : ""
        }`}
      >
        {i}
      </Button>
    );
  }

  return (
    <div className="flex justify-between items-center mt-6 text-sm text-gray-500 dark:text-gray-400">
      <span>
        {displayedStocks.length
          ? `${(currentPage - 1) * 10 + 1} - ${Math.min(
              currentPage * 10,
              filteredStocks.length
            )}`
          : 0}{" "}
        of {filteredStocks.length} results
      </span>
      <div className="flex space-x-1">
        {pageButtons}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="text-gray-400 dark:text-gray-500"
        >
          &gt;
        </Button>
      </div>
    </div>
  );
};

export default Pagination;
