import React, { FC } from "react";
import { Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface ISearchAndFilterBar {
  isToggled: () => void;
  showFilters: boolean;
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

const SearchAndFilterBar: FC<ISearchAndFilterBar> = ({
  isToggled,
  showFilters,
  searchQuery,
  setSearchQuery,
}) => {
  return (
    <div className="mb-6 flex items-center space-x-4">
      <div className="relative flex-grow">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 dark:text-gray-500" />
        <Input
          type="text"
          placeholder="Search for Stocks name or Company"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 pr-4 py-2 w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600 rounded-md"
        />
      </div>
      <Button
        variant="outline"
        size="sm"
        onClick={isToggled}
        className={`${
          showFilters ? "bg-gray-100 dark:bg-gray-700" : ""
        } border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300`}
      >
        <Filter className="h-4 w-4 mr-2" />
        Filters
      </Button>
    </div>
  );
};

export default SearchAndFilterBar;
