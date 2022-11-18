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
  selectedDate: DateType;
  shownDate: DateType;
  setShownDate: React.Dispatch<React.SetStateAction<DateType>>;
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

export interface ModalProps {
  isShowModal: boolean;
  setIsShowModal: SetStateBoolean;
  children: React.ReactNode;
}

export interface EmployeesState {
  newEmployee: NewEmployeeValues;
  listEmployees: NewEmployeeValues[];
}

export interface SelectInputProps {
  id: string;
  name: string;
  value: string | number;
  handleChangeFormValue: ChangeFormValueType;
}

export type SelectItemType = {
  id: string;
  name: string;
};

export interface SelectDropDownProps {
  id: string;
  value: string | number;
  handleChangeFormValue: ChangeFormValueType;
  handleHideCalendar: () => void;
  options: SelectItemType[];
}
export interface TableProps {
  listEmployees: Array<NewEmployeeValues>;
}

export interface SearchInputProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}
