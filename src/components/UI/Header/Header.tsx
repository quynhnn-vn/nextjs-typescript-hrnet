import Image from "next/image";
import { useRouter } from "next/router";
import logo from "public/logo.svg";
import React from "react";
import { ButtonHeader } from "src/utils/types";
import { SIZE } from "src/utils/variables";

export default function Header() {
  const router = useRouter();

  const handlePushRouter = (path: string) => {
    router.push(path);
  };

  const buttonsList: ButtonHeader[] = [
    {
      text: "Create Employee",
      path: "/",
      click: () => handlePushRouter("/"),
    },
    {
      text: "Current Employees",
      path: "/list",
      click: () => handlePushRouter("/list"),
    },
  ];

  return (
    <ul className="flex items-center justify-between flex-wrap sm:px-16 p-5 bg-secondary">
      <li
        className="w-1/10 flex items-center gap-6"
        onClick={() => handlePushRouter("/")}
      >
        <Image
          src={logo}
          alt="HRNet logo"
          width={SIZE.logo}
          height={SIZE.logo}
        />
        <h1 className="text-6xl font-header text-primary">HRnet</h1>
      </li>
      <li className="flex items-center gap-6 text-primary">
        {buttonsList.map((button: ButtonHeader, index: number) => (
          <button
            key={index}
            className={`px-2 py-2 rounded hover:underline ${
              button.path === router.pathname ? "underline" : ""
            } underline-offset-4`}
            onClick={button.click}
          >
            {button.text}
          </button>
        ))}
      </li>
    </ul>
  );
}
