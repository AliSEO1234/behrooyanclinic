"use client";

import Image from "next/image";
import { useState, useRef, useCallback, useEffect } from "react";

interface PatientReview {
  name: string;
  service: string;
  img: string;
  video: string;
}

const allPatients: PatientReview[] = [
  {
    name: "سمیه شاعری",
    service: "رنووبون بازو",
    img: "/images/خانم شاعری.png",
    video: "/videos/Video Project 2.mp4",
  },
  // آیتم‌های آینده - فعلاً تکرار برای پر کردن اسلایدر
];

// ۷ اسلات تولید کن - اگه داده واقعی نیست null باشه
const TOTAL_SLOTS = 7;
const slots: (PatientReview | null)[] = Array.from({ length: TOTAL_SLOTS }, (_, i) =>
  i < allPatients.length ? allPatients[i] : null
);

const PatientVideoReviews = () => {
  const [centerIndex, setCenterIndex] = useState(Math.floor(TOTAL_SLOTS / 2));
  const [isPlaying, setIsPlaying] = useState(false);
  const [waveAnimating, setWaveAnimating] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // ترتیب نمایش: centerIndex همیشه وسط باشه
  const getVisibleOrder = () => {
    const half = Math.floor(TOTAL_SLOTS / 2);
    const order: number[] = [];
    for (let offset = -half; offset <= half; offset++) {
      order.push(((centerIndex + offset) % TOTAL_SLOTS + TOTAL_SLOTS) % TOTAL_SLOTS);
    }
    return order;
  };

  const visibleOrder = getVisibleOrder();

  const stopVideo = useCallback(() => {
    setIsPlaying(false);
    setWaveAnimating(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, []);

  const handlePlayPause = useCallback(() => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
      setWaveAnimating(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
      setWaveAnimating(true);
    }
  }, [isPlaying]);

  const handleCardClick = useCallback((slotIndex: number) => {
    if (slotIndex === centerIndex) return;
    stopVideo();
    setCenterIndex(slotIndex);
  }, [centerIndex, stopVideo]);

  const handlePrev = useCallback(() => {
    stopVideo();
    setCenterIndex((prev) => ((prev - 1) % TOTAL_SLOTS + TOTAL_SLOTS) % TOTAL_SLOTS);
  }, [stopVideo]);

  const handleNext = useCallback(() => {
    stopVideo();
    setCenterIndex((prev) => (prev + 1) % TOTAL_SLOTS);
  }, [stopVideo]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const onEnded = () => {
      setIsPlaying(false);
      setWaveAnimating(false);
    };
    video.addEventListener("ended", onEnded);
    return () => video.removeEventListener("ended", onEnded);
  }, []);

  const centerPatient = slots[centerIndex];

  return (
    <section
      style={{
        marginTop: "clamp(40px, 4vw, 70px)",
        marginBottom: "clamp(40px, 4vw, 70px)",
      }}
    >
      {/* Title */}
      <div className="text-center" style={{ marginBottom: "clamp(24px, 2.5vw, 40px)" }}>
        <h2
          className="font-bold text-[#333333]"
          style={{
            fontSize: "clamp(18px, 2.2vw, 35px)",
            marginBottom: "clamp(16px, 1.5vw, 20px)",
          }}
        >
          نظرات بیماران
        </h2>
        <div
          className="flex items-center justify-center gap-x-0 mx-auto"
          style={{ maxWidth: "clamp(300px, 45vw, 700px)" }}
        >
          <div className="flex-1 bg-gradient-to-l from-[#9A62F7] to-transparent" style={{ height: "1.4px" }} />
          <Image
            src="/images/icon-heading.svg"
            alt=""
            width={40}
            height={40}
            className="mx-3 flex-shrink-0"
            style={{ width: "clamp(24px, 2.5vw, 38px)", height: "clamp(24px, 2.5vw, 38px)" }}
          />
          <div className="flex-1 bg-gradient-to-r from-[#9A62F7] to-transparent" style={{ height: "1.4px" }} />
        </div>
      </div>

      {/* Main container */}
      <div
        style={{
          paddingBlock: "clamp(30px, 3.5vw, 60px)",
          paddingInline: "clamp(12px, 2vw, 40px)",
        }}
      >
        {/* Wave animation - inline SVG */}
        <div className="flex justify-center" style={{ marginBottom: "clamp(16px, 2vw, 30px)" }}>
          <div
            className={waveAnimating ? "wave-bars-animate" : ""}
            style={{
              width: "clamp(140px, 16vw, 240px)",
              height: "clamp(40px, 4.5vw, 65px)",
              opacity: waveAnimating ? 1 : 0.4,
              transition: "opacity 0.5s ease",
            }}
          >
            <svg width="100%" height="100%" viewBox="0 0 200 65" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.5 8.5V56.5" stroke="#6F6F6F" strokeLinecap="round"/>
              <path d="M7.5 8.5V56.5" stroke="#6F6F6F" strokeLinecap="round"/>
              <path d="M0.5 48.5V16.5" stroke="#6F6F6F" strokeLinecap="round"/>
              <path d="M14.5 64.5V0.5" stroke="#6F6F6F" strokeLinecap="round"/>
              <path d="M33.25 16.5V47.5" stroke="#6F6F6F" strokeLinecap="round"/>
              <path d="M63.5 8.5V56.5" stroke="#6F6F6F" strokeLinecap="round"/>
              <path d="M49.5 8.5V56.5" stroke="#6F6F6F" strokeLinecap="round"/>
              <path d="M42.5 48.5V16.5" stroke="#6F6F6F" strokeLinecap="round"/>
              <path d="M56.5 64.5V0.5" stroke="#6F6F6F" strokeLinecap="round"/>
              <path d="M70.5 16.5V47.5" stroke="#6F6F6F" strokeLinecap="round"/>
              <path d="M106.5 8.5V56.5" stroke="#6F6F6F" strokeLinecap="round"/>
              <path d="M78.25 8.5V56.5" stroke="#6F6F6F" strokeLinecap="round"/>
              <path d="M85.5 48.5V16.5" stroke="#6F6F6F" strokeLinecap="round"/>
              <path d="M93.25 48.5V16.5" stroke="#6F6F6F" strokeLinecap="round"/>
              <path d="M99.5 64.5V0.5" stroke="#6F6F6F" strokeLinecap="round"/>
              <path d="M113.5 16.5V47.5" stroke="#6F6F6F" strokeLinecap="round"/>
              <path d="M149.5 8.5V56.5" stroke="#6F6F6F" strokeLinecap="round"/>
              <path d="M121.25 8.5V56.5" stroke="#6F6F6F" strokeLinecap="round"/>
              <path d="M135.5 8.5V56.5" stroke="#6F6F6F" strokeLinecap="round"/>
              <path d="M128.5 48.5V16.5" stroke="#6F6F6F" strokeLinecap="round"/>
              <path d="M142.5 64.5V0.5" stroke="#6F6F6F" strokeLinecap="round"/>
              <path d="M142.5 64.5V0.5" stroke="#6F6F6F" strokeLinecap="round"/>
              <path d="M156.5 16.5V47.5" stroke="#6F6F6F" strokeLinecap="round"/>
              <path d="M192.5 8.5V56.5" stroke="#6F6F6F" strokeLinecap="round"/>
              <path d="M178.5 8.5V56.5" stroke="#6F6F6F" strokeLinecap="round"/>
              <path d="M164.25 8.5V56.5" stroke="#6F6F6F" strokeLinecap="round"/>
              <path d="M171.5 48.5V16.5" stroke="#6F6F6F" strokeLinecap="round"/>
              <path d="M185.5 64.5V0.5" stroke="#6F6F6F" strokeLinecap="round"/>
              <path d="M199.5 16.5V47.5" stroke="#6F6F6F" strokeLinecap="round"/>
            </svg>
          </div>
        </div>

        {/* Cards slider */}
        <div
          className="flex items-center justify-center overflow-hidden"
          style={{ gap: "clamp(8px, 1.2vw, 18px)", marginBottom: "clamp(16px, 2vw, 28px)" }}
        >
          {visibleOrder.map((slotIndex, position) => {
            const patient = slots[slotIndex];
            const isCenter = position === Math.floor(TOTAL_SLOTS / 2);
            const distFromCenter = Math.abs(position - Math.floor(TOTAL_SLOTS / 2));

            return (
              <div
                key={`slot-${slotIndex}-${position}`}
                className="flex-shrink-0 relative overflow-hidden cursor-pointer"
                style={{
                  width: isCenter ? "clamp(180px, 18vw, 270px)" : "clamp(100px, 11vw, 170px)",
                  height: isCenter ? "clamp(230px, 24vw, 360px)" : "clamp(180px, 19vw, 280px)",
                  borderRadius: "clamp(14px, 1.5vw, 24px)",
                  background: patient && !isCenter ? "#F0F0F0" : !patient ? "#E8E8E8" : "transparent",
                  opacity: distFromCenter > 2 ? 0.5 : distFromCenter > 1 ? 0.7 : 1,
                  transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                  filter: !isCenter && patient ? "grayscale(0.6) brightness(0.85)" : "none",
                }}
                onClick={() => handleCardClick(slotIndex)}
              >
                {patient ? (
                  isCenter ? (
                    <div className="w-full h-full relative">
                      <video
                        ref={videoRef}
                        src={patient.video}
                        poster={patient.img}
                        className="w-full h-full object-cover"
                        style={{ borderRadius: "clamp(14px, 1.5vw, 24px)" }}
                        playsInline
                        preload="metadata"
                      />
                      {!isPlaying && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handlePlayPause();
                          }}
                          className="absolute inset-0 flex items-center justify-center z-[2]"
                        >
                          <Image
                            src="/images/Play 1.svg"
                            alt="play"
                            width={78}
                            height={78}
                            className="pointer-events-none"
                            style={{
                              width: "clamp(48px, 5vw, 78px)",
                              height: "clamp(48px, 5vw, 78px)",
                            }}
                          />
                        </button>
                      )}
                    </div>
                  ) : (
                    <Image
                      src={patient.img}
                      alt={patient.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1280px) 30vw, 15vw"
                    />
                  )
                ) : (
                  <div className="w-full h-full" />
                )}
              </div>
            );
          })}
        </div>

        {/* Patient name & service */}
        {centerPatient && (
          <div className="text-center" style={{ marginBottom: "clamp(14px, 1.5vw, 24px)" }}>
            <p
              className="font-bold text-[#333]"
              style={{ fontSize: "clamp(14px, 1.3vw, 20px)" }}
            >
              {centerPatient.name}
            </p>
            <p
              className="text-[#666] font-medium"
              style={{ fontSize: "clamp(12px, 1vw, 16px)" }}
            >
              {centerPatient.service}
            </p>
          </div>
        )}

        {/* Controls */}
        <div className="flex items-center justify-center" style={{ gap: "clamp(12px, 1.5vw, 20px)" }}>
          {/* Left arrow */}
          <button
            onClick={handlePrev}
            className="flex items-center justify-center rounded-full transition-all duration-200 hover:bg-[#F0F0F0] active:bg-[#E5E5E5] outline-none select-none"
            style={{
              width: "clamp(36px, 3.5vw, 48px)",
              height: "clamp(36px, 3.5vw, 48px)",
              border: "1px solid #CDCDCD",
            }}
          >
            <Image
              src="/images/icon 1 rast.svg"
              alt="قبلی"
              width={29}
              height={29}
              className="pointer-events-none"
              style={{ width: "clamp(20px, 2vw, 29px)", height: "clamp(20px, 2vw, 29px)" }}
            />
          </button>

          {/* Play / Stop button */}
          <button
            onClick={handlePlayPause}
            className="flex items-center justify-center rounded-full transition-all duration-200 hover:opacity-90 active:scale-95 outline-none select-none"
            style={{
              width: "clamp(42px, 4vw, 56px)",
              height: "clamp(42px, 4vw, 56px)",
              background: "#9A62F7",
              opacity: centerPatient ? 1 : 0.4,
              pointerEvents: centerPatient ? "auto" : "none",
            }}
          >
            {isPlaying ? (
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <rect x="3" y="2" width="4" height="14" rx="1" fill="white" />
                <rect x="11" y="2" width="4" height="14" rx="1" fill="white" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M4 2L16 9L4 16V2Z" fill="white" />
              </svg>
            )}
          </button>

          {/* Right arrow */}
          <button
            onClick={handleNext}
            className="flex items-center justify-center rounded-full transition-all duration-200 hover:bg-[#F0F0F0] active:bg-[#E5E5E5] outline-none select-none"
            style={{
              width: "clamp(36px, 3.5vw, 48px)",
              height: "clamp(36px, 3.5vw, 48px)",
              border: "1px solid #CDCDCD",
            }}
          >
            <Image
              src="/images/icon 2 chap.svg"
              alt="بعدی"
              width={29}
              height={29}
              className="pointer-events-none"
              style={{ width: "clamp(20px, 2vw, 29px)", height: "clamp(20px, 2vw, 29px)" }}
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PatientVideoReviews;
