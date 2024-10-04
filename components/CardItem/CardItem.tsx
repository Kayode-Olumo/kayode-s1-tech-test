import React from "react";
import { Card, CardContent } from "@/components/ui/card";

interface ICardItem {
  name: string;
  company: string;
  code: string;
  price: number;
  highlight?: boolean;
}

const CardItem: React.FC<ICardItem> = ({
  name,
  company,
  code,
  price,
  highlight = false,
}) => {
  return (
    <Card
      className={`${
        highlight ? "bg-orange-100 dark:bg-orange-900" : ""
      } hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-300`}
      data-testid="card-item"
    >
      <CardContent className="p-4">
        <div className="grid grid-cols-4 gap-4 items-center">
          <div
            className="font-medium text-gray-900 dark:text-gray-100"
            data-testid="card-name"
          >
            {name}
          </div>
          <div
            className="text-gray-700 dark:text-gray-300"
            data-testid="card-company"
          >
            {company}
          </div>
          <div
            className="text-gray-700 dark:text-gray-300"
            data-testid="card-code"
          >
            {code}
          </div>
          <div
            className="text-gray-700 dark:text-gray-300"
            data-testid="card-price"
          >
            £{price.toLocaleString()}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CardItem;
