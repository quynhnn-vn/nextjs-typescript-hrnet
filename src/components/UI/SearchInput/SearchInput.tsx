import React from "react";
import { BiSearch } from "react-icons/bi";
import { SearchInputProps } from "src/utils/types";
import { COLORS } from "src/utils/variables";

export default function SearchInput(props: SearchInputProps) {
  const { searchTerm, setSearchTerm } = props;

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  return (
    <form className="flex items-center justify-end max-w-max">
      <label className="px-2">
        <BiSearch size="1.5rem" color={COLORS.primary} />
      </label>
      <input
        type="search"
        placeholder="Search"
        className="h-10 outline-offset-0 border border-solid border-primary rounded px-2"
        value={searchTerm}
        onChange={onChangeSearch}
      />
    </form>
  );
}
