import React, { useRef, useState } from "react";
import { DateType, NewEmployeeValues } from "src/utils/types";
import DateInput from "src/components/UI/DateInput/DateInput";
import {
  COLORS,
  DEPARTMENTS,
  FORM_FIELDS,
  initialFormValues,
  STATES,
} from "src/utils/variables";
import { useAppDispatch } from "src/hooks/hooks";
import {
  addNewEmployee,
  resetNewEmployee,
} from "src/store/features/employeeSlice";
import SelectInput from "src/components/UI/SelectInput/SelectInput";
import { format } from "date-fns";
import { v4 } from "uuid";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { BiError } from "react-icons/bi";
import Button from "../UI/Button/Button";
import Modal from "../UI/Dialog/Dialog";

export default function NewEmployeeForm() {
  const [formValues, setFormValues] =
    useState<NewEmployeeValues>(initialFormValues);

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [hasError, setHasError] = useState(false);

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
          : format(new Date(value), "dd MMM yyyy");
    } else if (e) _value = String(e.target.value);

    setFormValues((prev: NewEmployeeValues) => ({
      ...prev,
      id: v4(),
      [id as keyof NewEmployeeValues]: _value,
    }));
  };

  const handleResetEmployee = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setFormValues(initialFormValues);
    dispatch(resetNewEmployee());
  };

  const handleToggleValid = () => {
    setIsValid((prev) => !prev);
  };

  const handleToggleError = () => {
    setHasError((prev) => !prev);
  };

  const handleAddEmployee = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (
      Object.values(formValues).includes("") ||
      Object.values(formValues).includes(0)
    ) {
      setIsSubmitted(true);
      handleToggleError();
    } else {
      setIsSubmitted(false);
      dispatch(addNewEmployee(formValues));
      handleToggleValid();
      handleResetEmployee(e);
    }
  };

  return (
    <div className="sm:px-16 p-5 text-center sm:text-left">
      <h2 className="text-2xl font-header text-primary mb-4">
        Create Employee
      </h2>
      <form>
        <div className="sm:columns-2 text-center shadow rounded p-3 sm:p-10">
          {FORM_FIELDS.map((field) => (
            <div key={field.id} className="w-full my-1 flex items-center gap-2">
              <label htmlFor={field.id} className="w-1/4 text-left">
                {field.placeholder}
                {!formValues[field.id as keyof NewEmployeeValues] &&
                  isSubmitted && <span className="text-danger"> * </span>}
              </label>
              {(field.type === "text" || field.type === "number") && (
                <input
                  type={field.type}
                  id={field.id}
                  name={field.placeholder}
                  placeholder={field.placeholder}
                  value={formValues[field.id as keyof NewEmployeeValues]}
                  onChange={(e) => handleChangeFormValue(field.id, e)}
                  min={0}
                  className="bg-secondary rounded h-10 px-2 w-3/4 sm:w-1/3"
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
                  options={field.id === "state" ? STATES : DEPARTMENTS}
                  handleChangeInput={handleChangeFormValue}
                />
              )}
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center gap-10 py-10">
          <Button click={handleAddEmployee} name="Submit" />
          <Button click={handleResetEmployee} name="Reset" isDanger={true} />
        </div>
      </form>
      <Modal
        isOpen={isValid}
        handleClose={handleToggleValid}
        icon={<BsFillCheckCircleFill size="2.5rem" color={COLORS.primary} />}
        content="New employee has been successfully created !"
      />
      <Modal
        isOpen={hasError}
        handleClose={handleToggleError}
        icon={<BiError size="2.5rem" color={COLORS.danger} />}
        content="Veuillez renseigner tous les champs !"
      />
    </div>
  );
}
