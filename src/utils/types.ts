export interface ChildrenProps {
  children: React.ReactNode;
}

export type DateType = string | number;
export type ChangeFormValueType = (
  id: string,
  e?: React.ChangeEvent<HTMLInputElement>,
  value?: string | number | undefined
) => void;
export type SetStateBoolean = React.Dispatch<React.SetStateAction<boolean>>;

export interface NewEmployeeValues {
  id: string;
  firstName: string;
  lastName: string;
  birthday: string;
  startDate: string;
  street: string;
  city: string;
  state: string;
  zipCode: number;
  department: string;
}

export interface Notification {
  message: string;
  isSuccess: undefined | boolean;
}

export interface ButtonHeader {
  text: string;
  path: string;
  click: () => void;
}
export interface DateInputProps {
  id: string;
  name: string;
  selectedDate: DateType;
  handleChangeFormValue: ChangeFormValueType;
}

export interface DatePickerProps {
  id: string;
  selectedDate: DateType;
  handleChangeFormValue: ChangeFormValueType;
  handleHideCalendar: () => void;
}

export interface DatePickerSelectorProps {
  id: string;
  selectedDate: DateType;
  shownDate: string | number;
  setShownDate: React.Dispatch<React.SetStateAction<string | number>>;
}

export interface DatePickerCalendarProps {
  id: string;
  selectedDate: DateType;
  shownDate: DateType;
  handleChangeFormValue: ChangeFormValueType;
  handleHideCalendar: () => void;
}

export interface CalendarCell {
  text: string;
  value: number;
}

export interface EmployeesState {
  newEmployee: NewEmployeeValues;
  listEmployees: NewEmployeeValues[];
}

export interface SelectInputProps {
  id: string;
  name: string;
  value: string | number;
  options: SelectItemType[];
  handleChangeInput: ChangeFormValueType;
}

export type SelectItemType = {
  id: string;
  name: string;
};

export interface SelectDropDownProps {
  id: string;
  value: string | number;
  handleHideDropDown: () => void;
  options: SelectItemType[];
  handleChangeInput: ChangeFormValueType;
}
export interface TableProps {
  listEmployees: Array<NewEmployeeValues>;
}

export interface SearchInputProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

export interface PaginationProps {
  listEmployees: NewEmployeeValues[];
  selectedEntry: SelectItemType;
  setSelectedEntry: React.Dispatch<React.SetStateAction<SelectItemType>>;
  onGoToNextPage: () => void;
  onGoToPreviousPage: () => void;
  onGoToSelectedPage: (page: number) => void;
  currentPage: number;
  totalPage: number;
}

export interface ButtonProps {
  click: (e: React.MouseEvent<HTMLElement>) => void;
  name: string;
  isDanger?: boolean;
}

export interface ModalProps {
  isOpen: boolean;
  handleClose: () => void;
  icon: React.ReactNode;
  content: string;
}
export interface NewDateType {
  day: string;
  month: string;
  year: string;
}
