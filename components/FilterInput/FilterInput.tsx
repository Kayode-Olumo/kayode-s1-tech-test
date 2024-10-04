import React, { ChangeEventHandler, FC } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface IFilterInput {
  id: string;
  label: string;
  type?: string;
  value: string | number;
  inputValue: ChangeEventHandler<HTMLInputElement>;
}

const FilterInput: FC<IFilterInput> = ({
  id,
  label,
  type,
  value,
  inputValue,
}) => {
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        type={type}
        value={value}
        onChange={(e) => inputValue(e)}
        className="bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
      />
    </div>
  );
};

export default FilterInput;
