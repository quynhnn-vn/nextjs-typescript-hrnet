import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import employeesReducer from "./features/employeeSlice";

const store = configureStore({
  reducer: {
    employees: employeesReducer,
  },
});

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

export default store;
