"use client";
import { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

const UpArrow = () => {
  const [moveScroll, setMoveScroll] = useState<boolean>(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        setMoveScroll(window.scrollY > 200);
      };
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);
  return (
    <button
    data-aos="fade-up"
      onClick={() => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }}
      className={`z-[5] w-[40px] h-[40px] s1512:w-[54px] s1512:h-[54px] rounded-full bg-white color hover:bg-color hover:text-white animation-global shadow-[0px_4px_4px_0px_#00000040] fixed left-5 bottom-5 ${
        moveScroll ? "flex-cen" : "hidden"
      }`}
    >
      <IoIosArrowUp className="size-6"/>
    </button>
  );
};
export default UpArrow;
