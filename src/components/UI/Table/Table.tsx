import React, { useEffect, useState } from "react";
import { NewEmployeeValues, TableProps } from "src/utils/types";
import { DEPARTMENTS, FORM_FIELDS, STATES } from "src/utils/variables";
import {
  TiArrowSortedUp,
  TiArrowSortedDown,
  TiArrowUnsorted,
} from "react-icons/ti";
import { orderBy } from "lodash";

export default function Table(props: TableProps) {
  const { listEmployees } = props;

  const [order, setOrder] = useState<boolean | "asc" | "desc">(false);
  const [data, setData] = useState(listEmployees);

  useEffect(() => {
    setData(listEmployees);
  }, [listEmployees]);

  const onSortTable = (fieldId: string, fieldType: string) => {
    let _order = order;
    if (_order === false || _order === "desc") {
      _order = "asc";
    } else {
      _order = "desc";
    }

    let _data = data;
    setData(
      _data.sort((a: NewEmployeeValues, b: NewEmployeeValues) => {
        const firstValue = a[fieldId as keyof NewEmployeeValues],
          secondValue = b[fieldId as keyof NewEmployeeValues];

        if (firstValue && secondValue) {
          if (fieldType === "date") {
            if (_order === "asc")
              return new Date(firstValue) > new Date(secondValue) ? 1 : -1;
            else return new Date(firstValue) < new Date(secondValue) ? 1 : -1;
          } else {
            if (_order === "asc") return firstValue > secondValue ? 1 : -1;
            else return firstValue < secondValue ? 1 : -1;
          }
        } else {
          return -1;
        }
      })
    );
    setOrder(_order);
  };

  return (
    <div>
      <table className="w-full border-1 shadow rounded">
        <thead>
          <tr className="h-14 bg-tertiary">
            {FORM_FIELDS.map((field, index) => (
              <th
                key={field.id}
                className={
                  index === 0
                    ? "rounded-tl"
                    : index === FORM_FIELDS.length - 1
                    ? "rounded-tr"
                    : ""
                }
              >
                {field.placeholder}
                <button onClick={() => onSortTable(field.id, field.type)}>
                  {order === false ? (
                    <TiArrowUnsorted />
                  ) : order === "asc" ? (
                    <TiArrowSortedUp />
                  ) : (
                    <TiArrowSortedDown />
                  )}
                </button>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-center">
          {data.map((employee: NewEmployeeValues, index) => (
            <tr
              key={`row_${index}`}
              className={index % 2 === 0 ? "bg-secondary" : ""}
            >
              {FORM_FIELDS.map((field, index) => {
                let value = employee[field.id as keyof NewEmployeeValues];
                if (field.type === "select") {
                  const foundState = STATES.find((state) => state.id == value);
                  const foundDepartment = DEPARTMENTS.find(
                    (department) => department.id == value
                  );
                  value =
                    field.id === "state" && foundState
                      ? foundState.name
                      : field.id === "department" && foundDepartment
                      ? foundDepartment.name
                      : value;
                }
                return (
                  <td key={index} className="h-10">
                    {value}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
