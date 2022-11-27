import { format } from "date-fns";
import React, { useMemo } from "react";
import { getCalendarRows } from "src/utils/functions";
import { DatePickerCalendarProps, DateType } from "src/utils/types";

export default function DatePickerCalendar(props: DatePickerCalendarProps) {
  const {
    id,
    selectedDate,
    shownDate,
    handleChangeFormValue,
    handleHideCalendar,
  } = props;

  const handleSelectDate = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    value: DateType | undefined
  ) => {
    e.preventDefault();
    handleChangeFormValue(id, undefined, value);
    handleHideCalendar();
  };

  const rows = useMemo(
    () => getCalendarRows(shownDate ? new Date(shownDate) : new Date()),
    [shownDate]
  );

  return (
    <div className="text-center">
      <div className="flex p-2">
        {rows[0].map(({ value }, i) => (
          <div key={i} className="flex-1">
            {format(value, "EEE")}
          </div>
        ))}
      </div>
      {rows.map((cells, rowIndex) => (
        <div key={rowIndex} className="flex">
          {cells.map(({ text, value }, i) => (
            <button
              key={`${text} - ${i}`}
              onClick={(e) => handleSelectDate(e, value)}
              className={`flex-1 rounded-full w-10 h-10  hover:bg-tertiary ${
                value === new Date(selectedDate).getTime()
                  ? "text-white bg-primary hover:text-black"
                  : ""
              }`}
            >
              {text}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}
