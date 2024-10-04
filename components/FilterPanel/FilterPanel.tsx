import React, { FC } from "react";
import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface IFilterPanel {
  sortOrder: "desc" | "asc";
  setSortOrder: React.Dispatch<React.SetStateAction<"desc" | "asc">>;
  minPrice: string;
  maxPrice: string;
  setMinPrice: React.Dispatch<React.SetStateAction<string>>;
  setMaxPrice: React.Dispatch<React.SetStateAction<string>>;
  minPriceOptions: number[];
  maxPriceOptions: number[];
  toggleSortOrder?: () => void;
  showCheapest: boolean;
  setShowCheapest: React.Dispatch<React.SetStateAction<boolean>>;
}

const FilterPanel: FC<IFilterPanel> = ({
  sortOrder,
  setSortOrder,
  minPrice,
  maxPrice,
  setMinPrice,
  setMaxPrice,
  minPriceOptions,
  maxPriceOptions,
  showCheapest,
  setShowCheapest,
}) => {
  const toggleSortOrder = () => {
    setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
  };

  return (
    <div
      className="mb-6 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg"
      data-testid="filter-panel"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Select
          value={minPrice}
          onValueChange={setMinPrice}
          data-testid="min-price-select"
        >
          <SelectTrigger
            className="w-full bg-white dark:bg-gray-600 text-gray-900 dark:text-gray-100"
            data-testid="min-price-trigger"
          >
            <SelectValue placeholder="Min Price" />
          </SelectTrigger>
          <SelectContent>
            {minPriceOptions.map((price) => (
              <SelectItem
                key={price}
                value={price.toString()}
                data-testid={`min-price-${price}`}
              >
                ${price}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select
          value={maxPrice}
          onValueChange={setMaxPrice}
          data-testid="max-price-select"
        >
          <SelectTrigger
            className="w-full bg-white dark:bg-gray-600 text-gray-900 dark:text-gray-100"
            data-testid="max-price-trigger"
          >
            <SelectValue placeholder="Max Price" />
          </SelectTrigger>
          <SelectContent>
            {maxPriceOptions.map((price) => (
              <SelectItem
                key={price}
                value={price.toString()}
                data-testid={`max-price-${price}`}
              >
                ${price}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Button
          variant="ghost"
          onClick={toggleSortOrder}
          className="flex items-center justify-center space-x-2 text-gray-700 dark:text-gray-300 w-full"
          data-testid="sort-order-toggle"
        >
          <span>Sort:</span>
          <span>{sortOrder === "asc" ? "A-Z" : "Z-A"}</span>
          <ArrowUpDown className="h-4 w-4" />
        </Button>

        <div className="flex items-center justify-center space-x-2">
          <Switch
            checked={showCheapest}
            onCheckedChange={setShowCheapest}
            id="show-cheapest"
            data-testid="show-cheapest-switch"
          />
          <label
            htmlFor="show-cheapest"
            className="text-sm font-medium text-gray-700 dark:text-gray-300"
            data-testid="show-cheapest-label"
          >
            Show 5 Cheapest
          </label>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;
