import { Popover } from "@mui/material";
import React, { useState } from "react";
import { SelectInputProps, SelectItemType } from "src/utils/types";
import { DEPARTMENTS, STATES } from "src/utils/variables";
import SelectDropDown from "./SelectDropDown";

export default function SelectInput(props: SelectInputProps) {
  const { id, name, value, handleChangeFormValue } = props;

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  let options = DEPARTMENTS;
  if (id === "state") options = STATES;

  const matchedOption = options.find(
    (option: SelectItemType) => option.id === value
  );

  const handleShowCalendar = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setAnchorEl(e.currentTarget);
  };

  const handleHideCalendar = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <button
        name={name}
        className="bg-secondary rounded h-10 px-2 w-1/3 text-left"
        onClick={handleShowCalendar}
      >
        {matchedOption?.name}
      </button>
      <Popover
        id={id}
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleHideCalendar}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <SelectDropDown
          id={id}
          value={value}
          options={options}
          handleChangeFormValue={handleChangeFormValue}
          handleHideCalendar={handleHideCalendar}
        />
      </Popover>
    </>
  );
}
