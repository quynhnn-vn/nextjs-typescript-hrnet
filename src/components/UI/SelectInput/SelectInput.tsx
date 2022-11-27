import { Popover } from "@mui/material";
import React, { useState } from "react";
import { SelectInputProps, SelectItemType } from "src/utils/types";
import SelectDropDown from "./SelectDropDown";

export default function SelectInput(props: SelectInputProps) {
  const { id, name, value, options, handleChangeInput } = props;

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const matchedOption = options.find(
    (option: SelectItemType) => option.id == value
  );

  const handleShowDropDown = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setAnchorEl(e.currentTarget);
  };

  const handleHideDropDown = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <button
        name={name}
        className={`bg-secondary h-10 px-2 text-left ${
          ["entry", "day", "month", "year"].includes(id)
            ? "w-max"
            : "min-w-max w-3/4 sm:w-1/3 rounded"
        }
        ${
          id === "day"
            ? "rounded-l-lg hover:underline underline-offset-4"
            : id === "year"
            ? "rounded-r-lg hover:underline underline-offset-4"
            : id === "month"
            ? "hover:underline underline-offset-4"
            : ""
        }
        `}
        onClick={handleShowDropDown}
      >
        {matchedOption?.name || <span className="text-gray">{name}</span>}
      </button>
      <Popover
        id={id}
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleHideDropDown}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <SelectDropDown
          id={id}
          value={value}
          options={options}
          handleChangeInput={handleChangeInput}
          handleHideDropDown={handleHideDropDown}
        />
      </Popover>
    </>
  );
}
