"use client";

import Image from "next/image";

const InstagramSection = () => {
  return (
    <section className="relative w-full overflow-hidden" style={{ marginTop: "clamp(40px, 4vw, 80px)", marginBottom: "clamp(40px, 4vw, 80px)" }}>
      <div
        className="relative w-full mx-auto"
        style={{
          borderRadius: "clamp(16px, 2vw, 30px)",
          overflow: "hidden",
        }}
      >
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/Group 9.png"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Desktop layout */}
        <div
          className="relative z-[2] hidden s1280:flex items-center justify-between"
          style={{
            height: "clamp(280px, 28vw, 420px)",
            paddingRight: "clamp(24px, 5vw, 80px)",
            paddingLeft: "clamp(24px, 5vw, 80px)",
          }}
        >
          {/* Text content - right side (RTL) */}
          <div className="flex flex-col items-start gap-y-4 max-w-[50%]">
            <h2
              className="font-black text-white leading-tight"
              style={{ fontSize: "clamp(18px, 2.5vw, 40px)" }}
            >
              قبل از تصمیم، نتایج واقعی را ببینید
            </h2>
            <p
              className="text-white/90 font-medium leading-relaxed"
              style={{ fontSize: "clamp(12px, 1.3vw, 20px)" }}
            >
              جدیدترین تخفیف‌ها و تجربه بیماران در اینستاگرام ما
            </p>
            <a
              href="https://www.instagram.com/behrooyanclinic/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white text-[#333] font-bold hover:bg-white/90 transition-all"
              style={{
                fontSize: "clamp(12px, 1.2vw, 18px)",
                paddingInline: "clamp(20px, 2.5vw, 40px)",
                paddingBlock: "clamp(10px, 1.2vw, 18px)",
                borderRadius: "clamp(12px, 1.5vw, 20px)",
                marginTop: "clamp(4px, 0.5vw, 8px)",
              }}
            >
              اینستاگرام کلینیک بهرویان
            </a>
          </div>

          {/* Instagram image - desktop */}
          <div
            className="relative flex-shrink-0"
            style={{
              width: "clamp(250px, 28vw, 420px)",
              height: "100%",
              overflow: "hidden",
            }}
          >
            <div className="instagram-scroll-track">
              <Image
                src="/images/instagram.png"
                alt="اینستاگرام کلینیک بهرویان"
                width={600}
                height={800}
                className="object-contain drop-shadow-2xl w-full h-auto"
              />
              <Image
                src="/images/instagram.png"
                alt=""
                width={600}
                height={800}
                aria-hidden="true"
                className="object-contain drop-shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Mobile layout */}
        <div className="relative z-[2] flex flex-col items-center s1280:hidden py-8 px-4 gap-y-5">
          {/* Text content - centered */}
          <div className="flex flex-col items-center text-center gap-y-3">
            <h2
              className="font-black text-white leading-tight"
              style={{ fontSize: "clamp(20px, 5vw, 28px)" }}
            >
              قبل از تصمیم، نتایج واقعی را ببینید
            </h2>
            <p
              className="text-white/90 font-medium leading-relaxed"
              style={{ fontSize: "clamp(13px, 3.5vw, 16px)" }}
            >
              جدیدترین تخفیف‌ها و تجربه بیماران در اینستاگرام ما
            </p>
            <a
              href="https://www.instagram.com/behrooyanclinic/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white text-[#333] font-bold hover:bg-white/90 transition-all"
              style={{
                fontSize: "14px",
                paddingInline: "28px",
                paddingBlock: "12px",
                borderRadius: "14px",
                marginTop: "4px",
              }}
            >
              اینستاگرام کلینیک بهرویان
            </a>
          </div>

          {/* Instagram image - mobile */}
          <div
            className="relative w-[85%] overflow-hidden rounded-[10px] instagram-mobile-fade"
            style={{ height: "220px" }}
          >
            <div className="instagram-scroll-track">
              <Image
                src="/images/instagram.png"
                alt="اینستاگرام کلینیک بهرویان"
                width={600}
                height={800}
                className="object-contain drop-shadow-2xl w-full h-auto"
              />
              <Image
                src="/images/instagram.png"
                alt=""
                width={600}
                height={800}
                aria-hidden="true"
                className="object-contain drop-shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
