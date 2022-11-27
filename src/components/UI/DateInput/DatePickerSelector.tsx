import React, { useState } from "react";
import { changeDateMonth, changeDateYear } from "src/utils/functions";
import {
  DatePickerSelectorProps,
  DateType,
  NewDateType,
} from "src/utils/types";
import {
  BsChevronDoubleLeft,
  BsChevronDoubleRight,
  BsChevronLeft,
  BsChevronRight,
} from "react-icons/bs";
import { format, isAfter, isBefore, lastDayOfMonth } from "date-fns";
import { COLORS, DAYS, MONTHS, YEARS } from "src/utils/variables";
import SelectInput from "../SelectInput/SelectInput";

export default function DatePickerSelector(props: DatePickerSelectorProps) {
  const { id, shownDate, setShownDate } = props;

  const [newDate, setNewDate] = useState<NewDateType>(
    shownDate
      ? {
          day: format(new Date(shownDate), "dd"),
          month: format(new Date(shownDate), "MMMM"),
          year: format(new Date(shownDate), "yyyy"),
        }
      : {
          day: format(new Date(), "dd"),
          month: format(new Date(), "MMMM"),
          year: format(new Date(), "yyyy"),
        }
  );

  const btnStyle = "p-2 rounded-full hover:bg-secondary disabled:bg-secondary";

  const handleShiftMonth = (isNextMonth: boolean) => {
    return () => {
      setNewDate((prevDate) => ({
        ...prevDate,
        month: changeDateMonth(
          Object.values(prevDate).join(" "),
          isNextMonth,
          true
        ),
      }));
      setShownDate((prevDate: string | number) =>
        changeDateMonth(prevDate, isNextMonth, false)
      );
    };
  };

  const handleShiftYear = (isNextYear: boolean) => {
    return () => {
      setNewDate((prevDate) => ({
        ...prevDate,
        year: isNextYear
          ? String(Number(prevDate.year) + 1)
          : String(Number(prevDate.year) - 1),
      }));
      setShownDate((prevDate: string | number) =>
        changeDateYear(prevDate, isNextYear)
      );
    };
  };

  const handleChangeDate = (
    id: string,
    _: React.ChangeEvent<HTMLInputElement> | undefined,
    optionId: string | number | undefined
  ) => {
    let cloneNewDate = {
      ...newDate,
      [id as keyof NewDateType]: String(optionId),
    };
    setNewDate(cloneNewDate);
    setShownDate(Object.values(cloneNewDate).join(" "));
  };

  return (
    <div className="flex items-center justify-between w-full border-b border-primary">
      <button className={btnStyle} onClick={handleShiftYear(false)}>
        <BsChevronDoubleLeft size="1.2rem" color={COLORS.primary} />
      </button>
      <button className={btnStyle} onClick={handleShiftMonth(false)}>
        <BsChevronLeft size="1.2rem" color={COLORS.primary} />
      </button>
      <div className="flex-1 flex-wrap text-center py-2">
        {Object.values(newDate).map((dateItem, index) => {
          const type = index === 0 ? "day" : index === 1 ? "month" : "year";
          return (
            <SelectInput
              key={index}
              id={type}
              options={
                type === "year"
                  ? YEARS
                  : type === "month"
                  ? MONTHS
                  : shownDate
                  ? DAYS(
                      new Date(shownDate).getFullYear(),
                      new Date(shownDate).getMonth()
                    )
                  : DAYS(new Date().getFullYear(), new Date().getMonth())
              }
              name={dateItem}
              value={dateItem}
              handleChangeInput={handleChangeDate}
            />
          );
        })}
      </div>
      <button
        className={btnStyle}
        onClick={handleShiftMonth(true)}
        disabled={
          id === "birthday" &&
          !isBefore(lastDayOfMonth(new Date(shownDate)), new Date())
        }
      >
        <BsChevronRight size="1.2rem" color={COLORS.primary} />
      </button>
      <button
        className={btnStyle}
        onClick={handleShiftYear(true)}
        disabled={
          id === "birthday" && Number(newDate.year) >= new Date().getFullYear()
        }
      >
        <BsChevronDoubleRight size="1.2rem" color={COLORS.primary} />
      </button>
    </div>
  );
}
