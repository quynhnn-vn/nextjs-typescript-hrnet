import { EmployeesState, NewEmployeeValues } from "src/utils/types";
import { initialFormValues } from "src/utils/variables";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { AppState } from "../store";

const initialState: EmployeesState = {
  newEmployee: initialFormValues,
  listEmployees: [],
};

export const newEmployeeSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    addNewEmployee: (
      state: EmployeesState,
      action: PayloadAction<NewEmployeeValues>
    ) => {
      state.newEmployee = action.payload;
      state.listEmployees = [action.payload, ...state.listEmployees];
      localStorage.setItem("employees", JSON.stringify(state));
    },
    resetNewEmployee: (state: EmployeesState) => {
      state.newEmployee = initialFormValues;
    },
  },
  // special reducer for hydrating the state. Special case for next-redux-wrapper
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { addNewEmployee, resetNewEmployee } = newEmployeeSlice.actions;
export const selectNewEmployee = (state: AppState) =>
  state.employees.newEmployee;
export const selectListEmployees = (state: AppState) =>
  state.employees.listEmployees;

export default newEmployeeSlice.reducer;
