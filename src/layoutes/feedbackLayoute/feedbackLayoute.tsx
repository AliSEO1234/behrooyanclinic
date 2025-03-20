"use client";
import FeedbackCard from "@/features/feedback/feedbackCard";
import { FeedbackLayoutType } from "@/types/feedback/feebackLayout";
import { useEffect, useRef } from "react";

const FeedBackLayout = ({ align, feedbackList }: FeedbackLayoutType) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleWheelScroll = (event: WheelEvent) => {
      if (scrollRef.current) {
        event.preventDefault();
        scrollRef.current.scrollLeft += event.deltaY;
      }
    };
    const container = scrollRef.current;
    if (container) {
      container.addEventListener("wheel", handleWheelScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("wheel", handleWheelScroll);
      }
    };
  }, []);
  return (
    <div
      ref={scrollRef}
      className={`flex ${
        align === "left"
          ? "flex-row items-center"
          : "flex-row-reverse items-center"
      } flex-nowrap overflow-x-scroll overflow-y-hidden gap-x-3 pb-5 s1280:pt-5 px-3 transition-all duration-500 ease-out scroll-hide scroll-smooth snap-x snap-mandatory`}
    >
      {feedbackList.map((feed, index) => {
        return (
          <div className="w-fit min-w-fit max-w-fit" key={index}>
            <FeedbackCard
              desc={feed.desc}
              scoreCount={feed.rateCount}
              title={feed.fullName}
            />
          </div>
        );
      })}
    </div>
  );
};
export default FeedBackLayout;
