import React, { useRef, useState } from "react";
import { DateType, NewEmployeeValues } from "src/utils/types";
import DateInput from "src/components/UI/DateInput/DateInput";
import { FORM_FIELDS, initialFormValues } from "src/utils/variables";
import { useAppDispatch } from "src/hooks/hooks";
import {
  addNewEmployee,
  resetNewEmployee,
} from "src/store/features/employeeSlice";
import SelectInput from "src/components/UI/SelectInput/SelectInput";
import { format } from "date-fns";
import { v4 } from "uuid";

export default function NewEmployeeForm() {
  const [formValues, setFormValues] =
    useState<NewEmployeeValues>(initialFormValues);

  const dispatch = useAppDispatch();

  const handleChangeFormValue = (
    id: string,
    e?: React.ChangeEvent<HTMLInputElement>,
    value?: DateType | undefined
  ) => {
    let _value: string | number | undefined;
    if (value) {
      _value =
        typeof value === "string"
          ? value
          : format(new Date(value), "dd/MM/yyyy");
    } else if (e) _value = String(e.target.value);

    setFormValues((prev: NewEmployeeValues) => ({
      ...prev,
      id: v4(),
      [id as keyof NewEmployeeValues]: _value,
    }));
  };

  const handleAddEmployee = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addNewEmployee(formValues));
  };

  const handleResetEmployee = () => {
    setFormValues(initialFormValues);
    dispatch(resetNewEmployee());
  };

  return (
    <div className="px-16 py-5">
      <h2 className="text-2xl font-header text-primary mb-4">
        Create Employee
      </h2>
      <form onSubmit={handleAddEmployee}>
        <div className="columns-2 text-center shadow rounded p-10">
          {FORM_FIELDS.map((field) => (
            <div key={field.id} className="w-full my-1 flex items-center">
              <label htmlFor={field.id} className="w-1/4 text-left">
                {field.placeholder}
              </label>
              {(field.type === "text" || field.type === "number") && (
                <input
                  type={field.type}
                  id={field.id}
                  name={field.placeholder}
                  placeholder={field.placeholder}
                  onChange={(e) => handleChangeFormValue(field.id, e)}
                  min={0}
                  className="bg-secondary rounded h-10 px-2 w-1/3"
                />
              )}
              {field.type === "date" && (
                <DateInput
                  id={field.id}
                  name={field.placeholder}
                  selectedDate={formValues[field.id as keyof NewEmployeeValues]}
                  handleChangeFormValue={handleChangeFormValue}
                />
              )}
              {field.type === "select" && (
                <SelectInput
                  id={field.id}
                  name={field.placeholder}
                  value={formValues[field.id as keyof NewEmployeeValues]}
                  handleChangeFormValue={handleChangeFormValue}
                />
              )}
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center gap-10 py-10">
          <button
            type="submit"
            className="h-10 w-32 bg-primary text-white px-2 rounded"
          >
            Submit
          </button>
          <button
            onClick={handleResetEmployee}
            className="h-10 w-32 bg-danger text-white px-2 rounded"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}
