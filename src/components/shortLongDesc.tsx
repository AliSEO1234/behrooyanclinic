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
    <div dir="rtl" className="pb-8 pt-[30px] border border-[#9A62F7] bg-white rounded-[40px] font-yekan-bakh">
      <div className="mb-4 s1280:mb-5">
        <h2 className="px-4 s1280:px-10 font-semibold s1280:text-[20px] text-right">
          {header}
        </h2>
      </div>
      <div className="px-4 s1280:px-10">
        <motion.div
          className="transition-all h-[90px] text-[14px] s1280:text-[16px] font-normal text-right overflow-hidden text-editor leading-7"
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
        <button
          className="px-4 s1280:px-0 text-[#9A62F7] animation-global mt-3"
          onClick={() => setIsFull((val) => !val)}
        >
          {isFull ? "نمایش کمتر" : "ادامه مطلب"}
        </button>
      </div>
    </div>
  );
};
export default SubContent;
