"use client";

import {
  // useEffect,
  useState,
  useMemo,
} from "react";

import FilterPanel from "../FilterPanel/FilterPanel";
import React from "react";
import StockTable from "../StockTable/StockTable";
import { stockData as initialStockData } from "@/data/stockData";
import SearchAndFilterBar from "../SearchAndFilterBar/SearchAndFilterBar";
import Drawer from "../Drawer/Drawer";
import AccessibilityDialog from "../AccessibilityDialog/AccessibilityDialog";

const StockList = () => {
  const [stockData, setStockData] = useState(initialStockData);
  const [showCheapest, setShowCheapest] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [showFilters, setShowFilters] = useState(false);
  const [isAddDrawerOpen, setIsAddDrawerOpen] = useState(false);
  const [newStock, setNewStock] = useState<IStock>({
    id: 0,
    name: "",
    company: "",
    code: "",
    price: 0,
  });

  // useEffect(() => {
  //   fetch("https://66fedfb12b9aac9c997dad84.mockapi.io/test-api/stocks", {
  //     method: "GET",
  //     headers: {
  //       "x-api-key": "c86229e4883a4538af704f5c08c0dc75",
  //     },
  //   })
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       return response.json();
  //     })
  //     .then((data) => setStockData(data))
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //       setError(error);
  //     });
  // }, []);

  // if (error) {
  //   return <div>Error: {error}</div>;
  // }

  const handleAddStock = (e: React.FormEvent) => {
    e.preventDefault();

    setStockData((prevStockData) => [...prevStockData, newStock]);

    setIsAddDrawerOpen(false);
    setNewStock({ id: 0, name: "", company: "", code: "", price: 0 });
  };

  const { minPriceOptions, maxPriceOptions } = useMemo(() => {
    const prices = stockData.map((stock) => stock.price);
    const minPrice = Math.floor(Math.min(...prices) / 100) * 100;
    const maxPrice = Math.ceil(Math.max(...prices) / 100) * 100;
    const priceRanges = Array.from(
      { length: (maxPrice - minPrice) / 100 + 1 },
      (_, i) => minPrice + i * 100
    );
    return {
      priceRanges,
      minPriceOptions: priceRanges.slice(0, -1),
      maxPriceOptions: priceRanges.slice(1),
    };
  }, []);

  const filteredStocks = stockData
    .filter((stock) => {
      const matchesSearch =
        stock.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        stock.company.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesMinPrice =
        minPrice === "" || stock.price >= Number(minPrice);
      const matchesMaxPrice =
        maxPrice === "" || stock.price <= Number(maxPrice);
      return matchesSearch && matchesMinPrice && matchesMaxPrice;
    })
    .sort((a, b) => {
      if (sortOrder === "asc") {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });

  const toggleSortOrder = () => {
    setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
  };

  return (
    <div className="container mx-auto p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm transition-colors duration-200">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Stocks
        </h1>
        <div className="flex items-center space-x-2">
          <AccessibilityDialog />

          <Drawer
            open={isAddDrawerOpen}
            onOpenChange={setIsAddDrawerOpen}
            newStock={newStock}
            setNewStock={setNewStock}
            handleAddStock={handleAddStock}
          />
        </div>
      </div>

      <SearchAndFilterBar
        showFilters={showFilters}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        isToggled={() => setShowFilters(!showFilters)}
      />

      {showFilters && (
        <FilterPanel
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
          minPrice={minPrice}
          maxPrice={maxPrice}
          setMinPrice={setMinPrice}
          setMaxPrice={setMaxPrice}
          minPriceOptions={minPriceOptions}
          maxPriceOptions={maxPriceOptions}
          toggleSortOrder={toggleSortOrder}
          showCheapest={showCheapest}
          setShowCheapest={setShowCheapest}
        />
      )}

      <StockTable
        subHeaders={["Name", "Company", "Code", "Price"]}
        filteredStocks={filteredStocks}
        showCheapest={showCheapest}
      />
    </div>
  );
};

export default StockList;
