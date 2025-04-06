"use client";
import PrePostCard from "@/components/subNestedCategory/prePostCard";
import PrePostItemCard from "@/components/subNestedCategory/prePostItemCard";
import { PrePostLayoutType } from "@/types/subNestedTypes/prePostTypes";
import { useRef } from "react";
import { IoIosArrowForward } from "react-icons/io";

const PrePostLayout = ({
  itemList,
  position,
  iconLabel,
}: PrePostLayoutType) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -250, behavior: "smooth" });
    }
  };
  const scrollRight = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const maxScroll = scrollWidth - clientWidth;

      if (scrollLeft < maxScroll) {
        scrollRef.current.scrollBy({ left: 250, behavior: "smooth" });
      }
    }
  };
  return (
    <section
      dir={position === "post" ? "ltr" : "rtl"}
      className={`grid grid-cols-12 gap-y-4 s1728:gap-x-20 s1920:gap-x-36 ${
        position === "post" ? "mb-5" : null
      }`}
    >
      <div className="col-span-12 s1280:col-span-3 s1728:col-span-2">
        <PrePostCard position={position} icon={iconLabel} />
      </div>
      <div className="relative z-[2] col-span-12 s1280:col-span-9 s1728:col-span-10 flex-cen s1280:pe-5">
        <button
          onClick={scrollRight}
          className={`pre-post-btn right-0 ${
            position === "post" ? "right-0" : "-right-[35px]"
          }`}
        >
          <IoIosArrowForward className="size-6" />
        </button>
        <button onClick={scrollLeft} className={`pre-post-btn ${position === "post" ? "-left-8" : "left-0"} -left-8`}>
          <IoIosArrowForward className="size-6 rotate-180" />
        </button>
        <hr className="w-full h-[18px] bg-[#00A8A91A] absolute top-1/2 -translate-y-1/2 right-0 z-[1]" />
        <div
          ref={scrollRef}
          className="w-full flex-left overflow-x-scroll flex-nowrap gap-x-5 py-4 snap-x scroll-hide"
        >
          {itemList.map((post, index) => (
            <PrePostItemCard key={index} label={post} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default PrePostLayout;
