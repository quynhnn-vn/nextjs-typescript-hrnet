import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "src/hooks/hooks";
import {
  getListEmployees,
  selectListEmployees,
} from "src/store/features/employeeSlice";
import Table from "src/components/UI/Table/Table";
import { NewEmployeeValues } from "src/utils/types";
import SearchInput from "../UI/SearchInput/SearchInput";
import { DEPARTMENTS, STATES } from "src/utils/variables";

export default function ListEmployees() {
  const list_employees = useAppSelector(selectListEmployees);
  const dispatch = useAppDispatch();

  const [listEmployees, setListEmployees] = useState<NewEmployeeValues[]>([]);
  const [backupListEmployees, setBackupListEmployees] = useState<
    NewEmployeeValues[]
  >([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    dispatch(getListEmployees());
  }, [dispatch]);

  useEffect(() => {
    setListEmployees(list_employees);
    setBackupListEmployees(list_employees);
  }, [list_employees]);

  useEffect(() => {
    if (searchTerm.trim().length > 0) {
      const filteredList = backupListEmployees.filter((employee) => {
        let _employee = Object.assign(
          {},
          {
            ...employee,
            department: DEPARTMENTS.find(
              (department) => department.id === employee.department
            )?.name,
            state: STATES.find((state) => state.id === employee.state)?.name,
          }
        );
        const values = Object.values(_employee);
        return values.find((value) =>
          String(value).toLowerCase().includes(searchTerm.trim().toLowerCase())
        );
      });
      setListEmployees(filteredList);
    } else {
      setListEmployees(backupListEmployees);
    }
  }, [searchTerm]);

  return (
    <div className="sm:px-16 p-5 text-center sm:text-left">
      <h2 className="text-2xl font-header text-primary mb-4">
        Current Employees
      </h2>
      <div className="flex justify-center sm:justify-end mb-4">
        <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
      <Table listEmployees={listEmployees} />
    </div>
  );
}
