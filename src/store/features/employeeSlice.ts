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
      let localEmployees = [];
      if (typeof window !== "undefined") {
        const employees = localStorage.getItem("listEmployees");
        if (employees) {
          localEmployees = JSON.parse(employees);
        }
        state.listEmployees = localEmployees;
      }
      state.listEmployees = [action.payload, ...state.listEmployees];
      localStorage.setItem(
        "listEmployees",
        JSON.stringify(state.listEmployees)
      );
    },
    getListEmployees: (state: EmployeesState) => {
      let localEmployees = [];
      if (typeof window !== "undefined") {
        const employees = localStorage.getItem("listEmployees");
        if (employees) {
          localEmployees = JSON.parse(employees);
        }
        state.listEmployees = localEmployees;
      }
    },
    resetNewEmployee: (state: EmployeesState) => {
      state.newEmployee = initialFormValues;
    },
    deleteEmployee: (
      state: EmployeesState,
      action: PayloadAction<NewEmployeeValues>
    ) => {
      state.listEmployees = state.listEmployees.filter(
        (employee) => employee.id !== action.payload.id
      );
      localStorage.setItem(
        "listEmployees",
        JSON.stringify(state.listEmployees)
      );
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

export const {
  addNewEmployee,
  getListEmployees,
  resetNewEmployee,
  deleteEmployee,
} = newEmployeeSlice.actions;
export const selectListEmployees = (state: AppState) => {
  let localEmployees = [];
  if (typeof window !== "undefined") {
    const employees = localStorage.getItem("listEmployees");
    if (employees) {
      localEmployees = JSON.parse(employees);
    }
  }
  return localEmployees || state.employees.listEmployees;
};

export default newEmployeeSlice.reducer;
