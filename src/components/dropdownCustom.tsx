"use client";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { IoIosArrowDown } from "react-icons/io";
import { ChangeDropdownType } from "@/types/navbar/navbar";

const DropDownCustom = ({
  bodyStyle,
  trigStyle,
  trigText,
  align = "center",
  children,
}: ChangeDropdownType) => {
  const [dropdown, setDropDown] = useState<boolean>(false);
  return (
    <DropdownMenu open={dropdown} onOpenChange={setDropDown}>
      <DropdownMenuTrigger className="outline-none" asChild>
        <button className={`${trigStyle}`}>
          <span>{trigText}</span>
          <span>
            <IoIosArrowDown
              className={`${dropdown ? "rotate-180" : "rotate-0"} anm size-4`}
            />
          </span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align={align}
        className={`${bodyStyle} mt-2 shadow-none`}
      >
        {children}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default DropDownCustom;
