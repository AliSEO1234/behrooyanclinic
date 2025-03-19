"use client";
import FeedbackCard from "@/features/feedback/feedbackCard";
import { FeedbackLayoutType } from "@/types/feedback/feebackLayout";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
const FeedBackLayout = ({ align, feedbackList }: FeedbackLayoutType) => {
  // pagination={{
  //   clickable: true,
  // }}
  return (
    <div className={`pb-5 s1280:pt-5 px-3`}>
      <Swiper
        style={{
          backgroundColor: "inherit",
        }}
        slidesPerView={1}
        spaceBetween={40}
        breakpoints={{
          1280: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1728: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        modules={[Pagination]}
        className={`mySwiper !bg-transparent py-4 h-[260px] s1280:h-[260px] flex ${
          align === "left" ? "flex-row" : "flex-row-reverse"
        }`}
      >
        {feedbackList.map((feed, index) => {
          return (
            <SwiperSlide key={index}>
              <FeedbackCard
                desc={feed.desc}
                scoreCount={feed.rateCount}
                title={feed.fullName}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
    // <div
    //   ref={feedParent}
    //   onMouseDown={handleMouseDown}
    //   onMouseMove={handleMouseMove}
    //   onMouseUp={handleMouseUp}
    //   onMouseLeave={handleMouseLeave}
    //   onTouchStart={handleTouchStart}
    //   onTouchMove={handleTouchMove}
    //   onTouchEnd={handleTouchEnd}
    //   className={`flex ${
    //     align === "left"
    //       ? "flex-row items-center"
    //       : "flex-row-reverse items-center"
    //   } flex-nowrap overflow-x-hidden overflow-y-hidden gap-x-5 pb-5 s1280:pt-5 px-3 transition-all duration-500 ease-out ${
    //     isDragging ? "cursor-grabbing select-none " : "cursor-grab select-auto"
    //   }`}
    // >
    //   {feedbackList.map((feed, index) => {
    //     return (
    //       <div
    //         className="w-fit min-w-fit max-w-fit"
    //         key={index}
    //         onMouseDown={handleMouseDown}
    //       >
    //         <FeedbackCard
    //           desc={feed.desc}
    //           scoreCount={feed.rateCount}
    //           title={feed.fullName}
    //         />
    //       </div>
    //     );
    //   })}
    // </div>
  );
};
export default FeedBackLayout;
