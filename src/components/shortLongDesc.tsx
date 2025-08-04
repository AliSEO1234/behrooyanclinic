"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
// import { operationDescription } from "./scripts/sliceContent";

const SubContent = ({
  desc,
  header,
}: {
  desc: string | null;
  header: string | null;
}) => {
  const [isFull, setIsFull] = useState(false);
  const [measuredHeight, setMeasuredHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      setMeasuredHeight(contentRef.current.scrollHeight);
    }
  }, [isFull]);

  return (
    <div className="pb-8 pt-[30px] border border-[#00979A] bg-white rounded-[40px]">
      <div className="mb-4 s1280:mb-5 ">
        <h2 className="px-4 s1280:px-10 font-semibold s1280:text-[20px]">
          {header}
        </h2>
      </div>
      <div className=" px-4 s1280:px-10 ">
        <motion.div
          className={`transition-all h-[90px] text-[14px] s1280:text-[20px] font-normal text-start overflow-hidden text-editor`}
          animate={{ height: isFull ? measuredHeight : 90 }}
          transition={{ duration: 0.5 }}
        >
          <div ref={contentRef}>
          <div
            dangerouslySetInnerHTML={{
              __html: desc || "",
            }}
          />
          </div>
        </motion.div>
        {/* <motion.div
          className={`transition-all text-[14px] s1280:text-[20px] font-normal text-start overflow-hidden text-editor`}
          initial={{ opacity: 0, height: 200 }}
          animate={{
            opacity: 1,
            height: "auto",
          }}
          transition={{ duration: 0.5 }}
          dangerouslySetInnerHTML={{
            __html: desc  || "",
          }}
        /> */}
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
