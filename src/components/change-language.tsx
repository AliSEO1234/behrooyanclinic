"use client";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useLocale } from "next-intl";
import { IoIosArrowDown } from "react-icons/io";
import { useRouter } from "next/navigation";
import { ChangeLanguageType } from "@/types/navbar/navbar";

const ChangeLanguage = ({ BodyWidth, trigStyle }: ChangeLanguageType) => {
  const [changeLang, setChangeLang] = useState<boolean>(false);
  const locale = useLocale();
  const router = useRouter();
  return (
    <DropdownMenu open={changeLang} onOpenChange={setChangeLang}>
      <DropdownMenuTrigger className="outline-none" asChild>
        <button
          className={`flex-cen gap-x-2 ${trigStyle} text-[12px] s1600:text-[18px] font-normal bg-[#DAEDE6] rounded-[40px] text-[#25A6A9]`}
        >
          <span>{locale === "ru" ? "RU" : "EN"}</span>
          <span>
            <IoIosArrowDown
              className={`${changeLang ? "rotate-180" : "rotate-0"} anm size-4`}
            />
          </span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className={`${BodyWidth} bg-inherit border-none p-0 mt-2 shadow-none`}
      >
        <DropdownMenuGroup>
          <DropdownMenuItem
            onClick={() => router.push(`/ru`)}
            className={`border mb-2 flex-cen p-0 h-[35px] rounded-[40px] bg-white font-bold text-[#25A6A9] cursor-pointer`}
          >
            RU
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => router.push(`/en`)}
            className={`border flex-cen p-0 h-[35px] rounded-[40px] bg-white font-bold text-[#25A6A9] cursor-pointer`}
          >
            EN
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default ChangeLanguage;
