import React from "react";
import { SelectDropDownProps, SelectItemType } from "src/utils/types";

export default function SelectDropDown(props: SelectDropDownProps) {
  const { id, value, options, handleChangeFormValue, handleHideCalendar } =
    props;

  const handleSelectItem = (optionId: string) => {
    handleChangeFormValue(id, undefined, optionId);
    handleHideCalendar();
  };

  return (
    <div>
      <ul className="h-fit max-h-96 w-80">
        {options.map((option: SelectItemType) => (
          <li
            key={option.id}
            value={option.id}
            onClick={() => handleSelectItem(option.id)}
            className={`h-10 leading-10 px-4 hover:bg-tertiary ${
              option.id === value
                ? "bg-primary text-white hover:text-black"
                : " "
            }`}
          >
            {option.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
