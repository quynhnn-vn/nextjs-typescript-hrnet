import React, { useState } from "react";
import { changeDateMonth, changeDateYear } from "src/utils/functions";
import { DatePickerSelectorProps } from "src/utils/types";
import { AiOutlineRight } from "react-icons/ai";
import {
  BsChevronDoubleLeft,
  BsChevronDoubleRight,
  BsChevronLeft,
  BsChevronRight,
} from "react-icons/bs";
import { format } from "date-fns";
import { COLORS } from "src/utils/variables";

export default function DatePickerSelector(props: DatePickerSelectorProps) {
  const { shownDate, setShownDate } = props;

  const btnStyle = "p-2 rounded-full hover:bg-secondary";

  const handleShiftMonth = (isNextMonth: boolean) => {
    return () => {
      setShownDate(changeDateMonth(new Date(shownDate), isNextMonth));
    };
  };

  const handleShiftYear = (isNextYear: boolean) => {
    return () => {
      setShownDate(changeDateYear(new Date(shownDate), isNextYear));
    };
  };

  return (
    <div className="flex items-center justify-between w-full border-b border-primary">
      <div className={btnStyle} onClick={handleShiftYear(false)}>
        <BsChevronDoubleLeft size="1.2rem" color={COLORS.primary} />
      </div>
      <div className={btnStyle} onClick={handleShiftMonth(false)}>
        <BsChevronLeft size="1.2rem" color={COLORS.primary} />
      </div>
      <div className="flex-1 text-center py-2 ">
        {format(new Date(shownDate), "dd MMM yyyy")}
      </div>
      <div className={btnStyle} onClick={handleShiftMonth(true)}>
        <BsChevronRight size="1.2rem" color={COLORS.primary} />
      </div>
      <div className={btnStyle} onClick={handleShiftYear(true)}>
        <BsChevronDoubleRight size="1.2rem" color={COLORS.primary} />
      </div>
    </div>
  );
}
