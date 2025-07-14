"use client";

import { ComboBoxType } from "@/types/comboBox/comboType";
import { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";
import { useLocale } from "next-intl";
const ComboBox = ({ options, onChange, trigger, className , containertStyle }: ComboBoxType) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [openUpwards, setOpenUpwards] = useState<boolean>(false);
  const comboRef = useRef<HTMLDivElement>(null);
  const locale = useLocale()
  const isRu = locale === "ru"
  useEffect(() => {
    if (isOpen && comboRef.current) {
      const rect = comboRef.current.getBoundingClientRect();
      const spaceBelow = window.innerHeight - rect.bottom;
      const spaceAbove = rect.top;

      if (spaceBelow < 200 && spaceAbove > spaceBelow) {
        setOpenUpwards(true);
      } else {
        setOpenUpwards(false);
      }
    }
  }, [isOpen]);
  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div ref={comboRef} className="relative z-[3] w-full">
      <div
        className={` ${className ? className : ""} cursor-pointer`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="line-clamp-1">{trigger}</span>
        <span>
          <IoIosArrowDown
            className={`${isOpen ? "rotate-180" : "rotate-0"} size-5 anm`}
          />
        </span>
      </div>
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`absolute w-full border bg-white rounded-[20px] py-2 ${containertStyle ? containertStyle : ""} ${
              openUpwards ? "bottom-full mb-1" : "mt-1"
            }`}
          >
            <div className="px-2 mb-2">
              <input
                type="text"
                className="w-full h-[44px] border p-2 rounded-[20px]"
                placeholder={isRu ? "Поиск..." : "Search..."}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <ul className="max-h-[230px] overflow-y-auto">
              {filteredOptions.length > 0 ? (
                filteredOptions.map((option,index) => (
                  <li
                    key={index}
                    className="px-2 py-1 cursor-pointer text-gray-500 font-medium hover:bg-[#f4f4f4] anm line-clamp-1 mb-1"
                    onClick={() => {
                      onChange(option);
                      setIsOpen(false);
                      setSearchTerm("");
                    }}
                  >
                    {option.label}
                  </li>
                ))
              ) : (
                <li className="p-2 text-gray-500">Option not found</li>
              )}
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
};

export default ComboBox;
