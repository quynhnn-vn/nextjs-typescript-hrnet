import React, { useState } from "react";
import { DatePickerProps } from "src/utils/types";
import DatePickerCalendar from "./DatePickerCalendar";
import DatePickerSelector from "./DatePickerSelector";

export default function DatePicker(props: DatePickerProps) {
  const { id, selectedDate, handleChangeFormValue, handleHideCalendar } = props;

  const [shownDate, setShownDate] = useState(selectedDate);

  return (
    <div className="w-full sm:w-96 shadow-2xl rounded">
      <DatePickerSelector
        id={id}
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
