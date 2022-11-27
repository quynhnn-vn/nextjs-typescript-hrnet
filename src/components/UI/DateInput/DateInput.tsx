import React, { useState } from "react";
import { DateInputProps } from "src/utils/types";
import DatePicker from "src/components/UI/DateInput/DatePicker";
import { Popover } from "@mui/material";

export default function DateInput(props: DateInputProps) {
  const { id, name, selectedDate, handleChangeFormValue } = props;

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

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
        id={id}
        name={name}
        className="bg-secondary rounded h-10 px-2 w-3/4 sm:w-1/3 text-left"
        onClick={handleShowCalendar}
      >
        {selectedDate || <span className="text-gray">{name}</span>}
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
        <DatePicker
          id={id}
          selectedDate={selectedDate}
          handleChangeFormValue={handleChangeFormValue}
          handleHideCalendar={handleHideCalendar}
        />
      </Popover>
    </>
  );
}
