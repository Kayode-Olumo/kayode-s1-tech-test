import React, { FC } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import FilterInput from "../FilterInput/FilterInput";

interface IDrawer {
  open: boolean;
  onOpenChange: React.Dispatch<React.SetStateAction<boolean>>;
  newStock: IStock;
  setNewStock: React.Dispatch<React.SetStateAction<IStock>>;
  handleAddStock: (e: React.FormEvent) => void;
}

const Drawer: FC<IDrawer> = ({
  open,
  onOpenChange,
  newStock,
  setNewStock,
  handleAddStock,
}) => {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetTrigger asChild>
        <Button
          size="sm"
          className="bg-black hover:bg-slate-700 text-white dark:bg-blue-700 dark:hover:bg-blue-800"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
        <SheetHeader>
          <SheetTitle>Add New Stock</SheetTitle>
          <SheetDescription>
            Enter the details of the new stock you want to monitor.
          </SheetDescription>
        </SheetHeader>
        <form onSubmit={handleAddStock} className="space-y-4 mt-4">
          <FilterInput
            id={"name"}
            label={"Name"}
            value={newStock.name}
            inputValue={(e: { target: { value: string } }) =>
              setNewStock({ ...newStock, name: e.target.value })
            }
          />
          <FilterInput
            id={"company"}
            label={"Company"}
            value={newStock.company}
            inputValue={(e: { target: { value: string } }) =>
              setNewStock({ ...newStock, company: e.target.value })
            }
          />
          <FilterInput
            id={"code"}
            label={"Code"}
            value={newStock.code}
            inputValue={(e: { target: { value: string } }) =>
              setNewStock({ ...newStock, code: e.target.value })
            }
          />
          <FilterInput
            id={"price"}
            label={"Price"}
            type={"number"}
            value={newStock.price}
            inputValue={(e) =>
              setNewStock({
                ...newStock,
                price: Number(e.target.value),
              })
            }
          />
          <Button type="submit" className="w-full">
            Add Stock
          </Button>
        </form>
      </SheetContent>
    </Sheet>
  );
};

export default Drawer;
