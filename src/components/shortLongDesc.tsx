"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { operationDescription } from "./scripts/sliceContent";

const SubContent = ({
  desc,
  header,
}: {
  desc: string | null;
  header: string | null;
}) => {
  const [isFull, setIsFull] = useState<boolean>(false);
  return (
    <div className="pb-8 pt-[30px] border border-[#00979A] bg-white rounded-[40px]">
      <div className="mb-4 s1280:mb-5 ">
        <h2 className="px-4 s1280:px-10 font-semibold s1280:text-[20px]">
          {header}
        </h2>
      </div>
      <div className=" px-4 s1280:px-10 ">
        <motion.div
          className={`transition-all text-[14px] s1280:text-[20px] font-normal text-start overflow-hidden ${
            isFull ? "hidden" : "block"
          }`}
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: 1,
            height: "60px",
          }}
          transition={{ duration: 0.5 }}
          dangerouslySetInnerHTML={{
            __html: operationDescription(desc, 40) || "",
          }}
        />
        <motion.div
          className={`transition-all text-[14px] s1280:text-[20px] font-normal text-start overflow-hidden text-editor ${
            isFull ? "block" : "hidden"
          }`}
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: 1,
            height: "auto",
          }}
          transition={{ duration: 0.5 }}
          dangerouslySetInnerHTML={{
            __html: desc || "",
          }}
        />
        <button
          className="px-4 s1280:px-0 text-[#00979A] animation-global mt-3"
          onClick={() => setIsFull((val) => !val)}
        >
          {isFull ? "Read Less" : "Read More"}
        </button>
      </div>
    </div>
  );
};
export default SubContent;
