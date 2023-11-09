import React from "react";
import { FilterProps } from "./FilterModal";

interface FilterCheckboxProps {
  checkboxItem: FilterProps;
  filter: string;
  filterHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FilterCheckbox = ({
  checkboxItem,
  filter,
  filterHandler,
}: FilterCheckboxProps) => {
  const { id, value, name } = checkboxItem;
  return (
    <div className="filters__check">
      <input
        type="radio"
        name="filter"
        value={value}
        id={id}
        checked={filter === value}
        onChange={(e) => filterHandler(e)}
      />
      <label htmlFor={id}>{name}</label>
    </div>
  );
};

export default FilterCheckbox;
