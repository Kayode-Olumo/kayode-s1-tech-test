import React from "react";
import { Button } from "@/components/ui/button";

interface IPagination {
  displayedStocks: IStock[];
  filteredStocks: IStock[];
}

const Pagination: React.FC<IPagination> = ({
  displayedStocks,
  filteredStocks,
}) => {
  return (
    <div className="flex justify-between items-center mt-6 text-sm text-gray-500 dark:text-gray-400">
      <span>
        1 - {displayedStocks.length} of {filteredStocks.length} results
      </span>
      <div className="flex space-x-1">
        <Button
          variant="ghost"
          size="sm"
          disabled
          className="text-gray-400 dark:text-gray-500"
        >
          1
        </Button>
        <Button
          variant="ghost"
          size="sm"
          disabled
          className="text-gray-400 dark:text-gray-500"
        >
          &gt;
        </Button>
      </div>
    </div>
  );
};

export default Pagination;
