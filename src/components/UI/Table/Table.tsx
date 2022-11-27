import React, { useEffect, useState } from "react";
import { NewEmployeeValues, TableProps } from "src/utils/types";
import { COLORS, DEPARTMENTS, FORM_FIELDS, STATES } from "src/utils/variables";
import {
  TiArrowSortedUp,
  TiArrowSortedDown,
  TiArrowUnsorted,
} from "react-icons/ti";
import { RiDeleteBin2Line } from "react-icons/ri";
import Pagination from "../Pagination/Pagination";
import { useAppDispatch } from "src/hooks/hooks";
import { deleteEmployee } from "src/store/features/employeeSlice";

export default function Table(props: TableProps) {
  const { listEmployees } = props;

  const dispatch = useAppDispatch();

  const [order, setOrder] = useState<boolean | "asc" | "desc">(false);
  const [data, setData] = useState<NewEmployeeValues[]>(listEmployees);
  const [selectedEntry, setSelectedEntry] = useState({
    id: "10",
    name: "10",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

  useEffect(() => {
    if (listEmployees?.length > 0) {
      setTotalPage(
        Math.ceil(listEmployees?.length / Number(selectedEntry.name))
      );
      setCurrentPage(1);
    }
  }, [listEmployees, selectedEntry]);

  useEffect(() => {
    const entry = Number(selectedEntry.name);
    setData(
      listEmployees.slice((currentPage - 1) * entry, currentPage * entry)
    );
  }, [listEmployees, currentPage]);

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

  const onGoToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const onGoToNextPage = () => {
    const entry = Number(selectedEntry.name);
    if (currentPage < listEmployees?.length / entry) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const onGoToSelectedPage = (page: number) => {
    setCurrentPage(page);
  };

  const onDeleteEmployee = (employee: NewEmployeeValues) => {
    return () => {
      dispatch(deleteEmployee(employee));
    };
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-1 shadow rounded mb-4 table-auto">
        <thead>
          <tr className="h-14 bg-tertiary">
            {FORM_FIELDS.map((field, index) => (
              <th
                key={field.id}
                className={`sm:border-0 border text-center ${
                  index === 0 ? "rounded-tl" : ""
                }`}
              >
                <span className="flex items-center justify-center">
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
                </span>
              </th>
            ))}
            <th className="sm:border-0 border rounded-tr"></th>
          </tr>
        </thead>
        <tbody className="text-center">
          {data.length ? (
            data.map((employee: NewEmployeeValues, index) => (
              <tr
                key={`row_${index}`}
                className={index % 2 === 0 ? "bg-secondary" : ""}
              >
                {FORM_FIELDS.map((field, index) => {
                  let value = employee[field.id as keyof NewEmployeeValues];
                  if (field.type === "select") {
                    const foundState = STATES.find(
                      (state) => state.id == value
                    );
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
                    <td key={index} className="h-10 sm:border-0 border">
                      {value}
                    </td>
                  );
                })}
                <td className="sm:border-0 border px-2">
                  <button onClick={onDeleteEmployee(employee)}>
                    <RiDeleteBin2Line size="1.2rem" color={COLORS.danger} />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td className="h-14">No data available in table</td>
            </tr>
          )}
        </tbody>
      </table>
      <Pagination
        listEmployees={listEmployees}
        selectedEntry={selectedEntry}
        setSelectedEntry={setSelectedEntry}
        currentPage={currentPage}
        totalPage={totalPage}
        onGoToNextPage={onGoToNextPage}
        onGoToPreviousPage={onGoToPreviousPage}
        onGoToSelectedPage={onGoToSelectedPage}
      />
    </div>
  );
}
