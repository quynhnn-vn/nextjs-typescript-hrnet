import { CalendarCell } from "./types";
import {
  addMonths,
  addYears,
  format,
  getDaysInMonth,
  subMonths,
} from "date-fns";
import { NextRouter } from "next/router";

export const handlePushRouter = (router: NextRouter, path: string) => {
  router.push(path);
};

export const changeDateYear = (
  date: string | number,
  isNextYear: boolean
): string => {
  let newDate = date ? new Date(date) : new Date();
  return format(addYears(newDate, isNextYear ? 1 : -1), "dd MMM yyyy");
};

export const changeDateMonth = (
  date: string | number,
  isNextMonth: boolean,
  isChangeNewDate: boolean
): string => {
  let newDate = date ? new Date(date) : new Date();

  if (newDate.getMonth() === 0 && !isNextMonth) {
    newDate.setFullYear(newDate.getFullYear() - 1);
    newDate.setMonth(11);
    return isChangeNewDate
      ? format(newDate, "MMMM")
      : format(newDate, "dd MMM yyyy");
  } else if (newDate.getMonth() === 11 && isNextMonth) {
    newDate.setFullYear(newDate.getFullYear() + 1);
    newDate.setMonth(0);
    return isChangeNewDate
      ? format(newDate, "MMMM")
      : format(newDate, "dd MMM yyyy");
  }
  newDate = addMonths(newDate, isNextMonth ? 1 : -1);
  return isChangeNewDate
    ? format(newDate, "MMMM")
    : format(newDate, "dd MMM yyyy");
};

const getCalendarCells = (date: Date): CalendarCell[] => {
  const daysArray = new Array(getDaysInMonth(date)).fill(1);
  const calendarCells: CalendarCell[] = [];

  const prepareCell = (date: Date, dayNumber: number) => {
    return {
      text: String(dayNumber),
      value: date.setDate(dayNumber),
    };
  };

  daysArray.forEach((_, i) => {
    calendarCells.push(prepareCell(date, i + 1));
  });

  const cellsToAdd = 35 - daysArray.length;

  const lastMonth = subMonths(date, 1);
  for (let i = 0; i < Math.floor(cellsToAdd / 2); i++) {
    calendarCells.unshift(
      prepareCell(lastMonth, getDaysInMonth(lastMonth) - i)
    );
  }

  const nextMonth = addMonths(date, 1);
  for (let i = 0; i < Math.round(cellsToAdd / 2); i++) {
    calendarCells.push(prepareCell(nextMonth, i + 1));
  }

  return calendarCells;
};

export const getCalendarRows = (date: Date): Array<CalendarCell[]> => {
  const cells = getCalendarCells(date);
  const rows: Array<CalendarCell[]> = [];

  for (let i = 0; i < cells.length; i += 7) {
    rows.push(cells.slice(i, i + 7));
  }
  return rows;
};
