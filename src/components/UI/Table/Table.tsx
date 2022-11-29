import React, { useEffect, useState } from "react";
import { useAppDispatch } from "src/hooks/hooks";
import { deleteEmployee } from "src/store/features/employeeSlice";
import { NewEmployeeValues, TableProps } from "src/utils/types";
import { Table } from "typescript-hrnet-table";
import Pagination from "../Pagination/Pagination";

export default function TableComponent(props: TableProps) {
  const { listEmployees } = props;

  const dispatch = useAppDispatch();

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
    dispatch(deleteEmployee(employee));
  };

  return (
    <div className="overflow-x-auto">
      <Table tableData={data} onDeleteData={onDeleteEmployee} />
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
