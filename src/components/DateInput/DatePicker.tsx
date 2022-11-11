import React, { useState } from "react";
import { DatePickerProps } from "src/utils/types";
import DatePickerCalendar from "./DatePickerCalendar";
import DatePickerSelector from "./DatePickerSelector";

export default function DatePicker(props: DatePickerProps) {
  const { id, selectedDate, handleChangeFormValue, handleHideCalendar } = props;

  const [shownDate, setShownDate] = useState(selectedDate);

  return (
    <div className="w-80 shadow-2xl rounded">
      <DatePickerSelector
        selectedDate={selectedDate}
        shownDate={shownDate}
        setShownDate={setShownDate}
      />
      <DatePickerCalendar
        id={id}
        selectedDate={selectedDate}
        shownDate={shownDate}
        handleChangeFormValue={handleChangeFormValue}
        handleHideCalendar={handleHideCalendar}
      />
    </div>
  );
}
