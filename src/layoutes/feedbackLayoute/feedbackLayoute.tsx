"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import FeedbackCard from "@/features/feedback/feedbackCard";
import { FeedbackLayoutType } from "@/types/feedback/feebackLayout";

const FeedBackLayout = ({ align, feedbackList }: FeedbackLayoutType) => {
  return (
    <div className="relative w-full overflow-hidden px-3 pb-5 s1280:pt-5">
      <Swiper
        slidesPerView="auto"
        spaceBetween={12}
        loop={false}
        speed={1000}
        modules={[Autoplay]}
        dir={align === "right" ? "rtl" : "ltr"}
        className="!flex"
      >
        {feedbackList.map((feed, index) => (
          <SwiperSlide key={index} className="!w-fit">
            <FeedbackCard
              desc={feed.desc}
              scoreCount={feed.rateCount}
              title={feed.fullName}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeedBackLayout;
