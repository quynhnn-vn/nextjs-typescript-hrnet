import React from "react";
import { ButtonProps } from "src/utils/types";

export default function Button(props: ButtonProps) {
  const { click, name, isDanger } = props;
  return (
    <button
      onClick={click}
      className={`h-10 w-32 text-white px-2 rounded ${
        isDanger ? "bg-danger" : "bg-primary"
      }`}
    >
      {name}
    </button>
  );
}
