"use client";
import { useState, useRef } from "react";
import Image from "next/image";

type TimelineStep = {
  title: string;
  description: string;
};

const steps: TimelineStep[] = [
  {
    title: "شروع ارتباط",
    description: "درخواست خود را ثبت کنید یا با ما تماس بگیرید.",
  },
  {
    title: "مشاوره اولیه",
    description: "نیاز شما بررسی و شرایط شما به‌طور کامل درک می‌شود.",
  },
  {
    title: "بررسی تخصصی",
    description: "پزشکان ما بهترین روش درمان را برای شما انتخاب می‌کنند.",
  },
  {
    title: "ارائه پلن درمان",
    description: "یک برنامه شخصی‌سازی‌شده همراه با هزینه و جزئیات دریافت می‌کنید.",
  },
  {
    title: "انجام درمان",
    description: "فرآیند درمان با دقت و پشتیبانی کامل انجام می‌شود.",
  },
  {
    title: "پشتیبانی و مراقبت",
    description: "قبل و بعد از درمان همراه شما هستیم (حضوری و آنلاین).",
  },
];

const ICON_SIZE = "w-[42px] h-[41px] s1512:w-[50px] s1512:h-[48px] s1920:w-[56px] s1920:h-[54px]";

const getIconSrc = (isActive: boolean, isCompleted: boolean) =>
  isActive
    ? "/images/timeline-step-active.svg"
    : isCompleted
    ? "/images/timeline-step-done.svg"
    : "/images/timeline-step-future.svg";

// Each step has 2 half-segments (left line + right line).
// We stagger delays so the bar flows sequentially like a wave.
// Segment order (RTL): step0-right, step1-left, step1-right, step2-left, ...
const SEGMENT_DURATION = 0.35; // seconds per half-segment

const TreatmentTimeline = () => {
  const [activeStep, setActiveStep] = useState(0);
  const prevStepRef = useRef(0);

  const handleClick = (index: number) => {
    prevStepRef.current = activeStep;
    setActiveStep(index);
  };

  const prevStep = prevStepRef.current;
  const movingForward = activeStep >= prevStep;

  // Calculate stagger delay for each half-segment based on direction
  const getDelay = (segmentIndex: number, isFilling: boolean) => {
    if (!isFilling) return 0;

    if (movingForward) {
      // Filling forward: segments after prevStep get staggered delays
      const startSegment = prevStep * 2 + 1; // first segment that was already half-filled
      const offset = segmentIndex - startSegment;
      return Math.max(0, offset) * SEGMENT_DURATION;
    } else {
      // Going backward: no stagger, all collapse together
      return 0;
    }
  };

  return (
    <section className="relative z-[2]" style={{ marginBottom: "clamp(40px, 5.5vw, 80px)" }}>
      {/* Header */}
      <div className="text-center" style={{ marginBottom: "clamp(32px, 4vw, 48px)" }}>
        <h2 className="font-bold text-[#333333]" style={{ fontSize: "clamp(15px, 2.2vw, 35px)", marginBottom: "clamp(16px, 1.5vw, 20px)" }}>
          مسیر درمان شما در بهرویان
        </h2>
        <div className="flex items-center justify-center gap-x-0 mx-auto" style={{ maxWidth: "clamp(300px, 45vw, 700px)" }}>
          <div className="flex-1 bg-gradient-to-l from-[#9A62F7] to-transparent" style={{ height: "1.4px" }} />
          <img
            src="/images/icon-heading.svg"
            alt=""
            className="mx-3 flex-shrink-0"
            style={{ width: "clamp(24px, 2.5vw, 38px)", height: "clamp(24px, 2.5vw, 38px)" }}
          />
          <div className="flex-1 bg-gradient-to-r from-[#9A62F7] to-transparent" style={{ height: "1.4px" }} />
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden s1280:block">
        <div className="bg-white rounded-[20px] s1512:rounded-[30px] shadow-[0px_2px_20px_#0000000A] px-6 s1512:px-10 s1920:px-14 py-8 s1512:py-10 s1920:py-12">
          <div className="grid grid-cols-6 gap-0">
            {steps.map((step, index) => {
              const isActive = index === activeStep;
              const isCompleted = index < activeStep;
              const isFirst = index === 0;
              const isLast = index === steps.length - 1;

              // Left half-segment index: index * 2 - 1 (only exists if not first)
              // Right half-segment index: index * 2
              const leftSegIdx = index * 2 - 1;
              const rightSegIdx = index * 2;

              const leftFilled = isCompleted || isActive;
              const rightFilled = isCompleted;
              const rightHalf = isActive;

              const rightWidth = rightFilled ? "100%" : rightHalf ? "50%" : "0%";
              const leftWidth = leftFilled ? "100%" : "0%";

              return (
                <div key={index} className="flex flex-col items-center">
                  {/* Icon + line row */}
                  <div className="flex items-center w-full mb-5 s1512:mb-7">
                    {/* Left line */}
                    {!isFirst ? (
                      <div className="flex-1 h-[3px] bg-[#E8E8E8] relative overflow-hidden">
                        <div
                          className="absolute top-0 right-0 h-full bg-[#9A62F7]"
                          style={{
                            width: leftWidth,
                            transition: `width ${SEGMENT_DURATION}s cubic-bezier(0.25, 0.1, 0.25, 1)`,
                            transitionDelay: `${getDelay(leftSegIdx, leftFilled)}s`,
                          }}
                        />
                      </div>
                    ) : (
                      <div className="flex-1" />
                    )}

                    {/* Squircle icon */}
                    <button
                      onClick={() => handleClick(index)}
                      className="relative z-[2] flex-shrink-0 cursor-pointer"
                    >
                      <Image
                        src={getIconSrc(isActive, isCompleted)}
                        alt=""
                        width={61}
                        height={59}
                        className={`${ICON_SIZE} transition-all duration-500`}
                      />
                    </button>

                    {/* Right line */}
                    {!isLast ? (
                      <div className="flex-1 h-[3px] bg-[#E8E8E8] relative overflow-hidden">
                        <div
                          className="absolute top-0 right-0 h-full bg-[#9A62F7]"
                          style={{
                            width: rightWidth,
                            transition: `width ${SEGMENT_DURATION}s cubic-bezier(0.25, 0.1, 0.25, 1)`,
                            transitionDelay: `${getDelay(rightSegIdx, rightFilled || rightHalf)}s`,
                          }}
                        />
                      </div>
                    ) : (
                      <div className="flex-1" />
                    )}
                  </div>

                  {/* Title + Description */}
                  <button
                    onClick={() => handleClick(index)}
                    className="cursor-pointer text-center px-2 s1512:px-3"
                  >
                    <h3
                      className={`text-[13px] s1512:text-[15px] s1920:text-[17px] mb-1.5 transition-all duration-300 ${
                        isActive
                          ? "font-black text-[#2D2D2D]"
                          : isCompleted
                          ? "font-semibold text-[#444]"
                          : "font-medium text-[#AAAAAA]"
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p
                      className={`text-[11px] s1512:text-[12px] s1920:text-[13px] leading-[18px] s1512:leading-[20px] transition-all duration-300 ${
                        isActive
                          ? "font-bold text-[#555]"
                          : isCompleted
                          ? "font-medium text-[#777]"
                          : "font-normal text-[#C5C5C5]"
                      }`}
                    >
                      {step.description}
                    </p>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="s1280:hidden">
        <div className="bg-white rounded-[20px] shadow-[0px_2px_20px_#0000000A] p-5">
          <div className="flex flex-col">
            {steps.map((step, index) => {
              const isActive = index === activeStep;
              const isCompleted = index < activeStep;
              const isLast = index === steps.length - 1;

              const filled = isCompleted;
              const half = isActive;
              const height = filled ? "100%" : half ? "50%" : "0%";
              const segIdx = index;
              const isFilling = filled || half;

              return (
                <div key={index} className="flex items-stretch gap-x-3">
                  <div className="flex flex-col items-center">
                    <button
                      onClick={() => handleClick(index)}
                      className="relative z-[2] flex-shrink-0 cursor-pointer"
                    >
                      <Image
                        src={getIconSrc(isActive, isCompleted)}
                        alt=""
                        width={61}
                        height={59}
                        className="w-[36px] h-[35px] transition-all duration-500"
                      />
                    </button>
                    {!isLast && (
                      <div className="w-[3px] flex-1 min-h-[16px] bg-[#E8E8E8] relative overflow-hidden">
                        <div
                          className="absolute top-0 right-0 w-full bg-[#9A62F7]"
                          style={{
                            height,
                            transition: `height ${SEGMENT_DURATION}s cubic-bezier(0.25, 0.1, 0.25, 1)`,
                            transitionDelay: `${isFilling ? Math.max(0, segIdx - prevStep) * SEGMENT_DURATION : 0}s`,
                          }}
                        />
                      </div>
                    )}
                  </div>
                  <button
                    onClick={() => handleClick(index)}
                    className={`text-right cursor-pointer pt-1 ${!isLast ? "pb-5" : ""}`}
                  >
                    <h3
                      className={`text-[14px] mb-1 transition-all duration-300 ${
                        isActive
                          ? "font-black text-[#2D2D2D]"
                          : isCompleted
                          ? "font-semibold text-[#444]"
                          : "font-medium text-[#AAAAAA]"
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p
                      className={`text-[12px] leading-5 transition-all duration-300 ${
                        isActive
                          ? "font-bold text-[#555]"
                          : isCompleted
                          ? "font-medium text-[#777]"
                          : "font-normal text-[#C5C5C5]"
                      }`}
                    >
                      {step.description}
                    </p>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreatmentTimeline;
