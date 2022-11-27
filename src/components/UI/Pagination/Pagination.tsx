import React, { useState } from "react";
import SelectInput from "src/components/UI/SelectInput/SelectInput";
import { PaginationProps } from "src/utils/types";
import { ENTRIES } from "src/utils/variables";

export default function Pagination(props: PaginationProps) {
  const {
    listEmployees,
    selectedEntry,
    setSelectedEntry,
    currentPage,
    totalPage,
    onGoToNextPage,
    onGoToPreviousPage,
    onGoToSelectedPage,
  } = props;

  const handleChangeEntry = (
    id: string,
    e?: React.ChangeEvent<HTMLInputElement>,
    optionId?: string | number | undefined
  ) => {
    const matchedEntry = ENTRIES.find((entry) => entry.id === optionId);
    matchedEntry &&
      typeof optionId === "string" &&
      setSelectedEntry({
        id: optionId,
        name: matchedEntry.name,
      });
  };

  return (
    <div className="flex items-center justify-center sm:justify-between flex-wrap gap-y-2">
      <div className="flex items-center gap-2">
        Show
        <SelectInput
          id="entry"
          name={selectedEntry.name}
          value={selectedEntry.name}
          options={ENTRIES}
          handleChangeInput={handleChangeEntry}
        />
        entries
      </div>
      <div>
        Showing {(currentPage - 1) * Number(selectedEntry.name) + 1} to{" "}
        {Math.min(
          currentPage * Number(selectedEntry.name),
          listEmployees.length
        )}{" "}
        of {listEmployees.length} entries
      </div>
      <div className="flex items-center gap-2">
        <button
          className={`${
            currentPage === 1 ? "text-secondary" : "hover:underline"
          } underline-offset-4`}
          onClick={onGoToPreviousPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {[...Array(totalPage).keys()]
          .map((p) => ++p)
          .map((page, index) => (
            <button
              key={index}
              className={`h-10 w-10 text-white px-2 rounded ${
                currentPage === page ? "bg-primary" : "bg-tertiary text-black"
              }`}
              onClick={() => onGoToSelectedPage(page)}
            >
              {page}
            </button>
          ))}
        <button
          className={`${
            currentPage === totalPage ? "text-secondary" : "hover:underline"
          } underline-offset-4`}
          onClick={onGoToNextPage}
          disabled={currentPage === totalPage}
        >
          Next
        </button>
      </div>
    </div>
  );
}
