"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const items = [
  {
    title: "خانم محمدی | خدمات کاشت مو",
    desc: "آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد.",
    img: "/images/نظرات بیمار 1.png",
  },
  {
    title: "آقای رضایی | خدمات زیبایی صورت",
    desc: "تجربه بسیار عالی از خدمات کلینیک بهرویان داشتم. پزشکان متخصص و حرفه‌ای با دقت بالا کار خود را انجام دادند و نتیجه فوق‌العاده بود.",
    img: "/images/نظرات بیمار2.png",
  },
  {
    title: "خانم احمدی | خدمات لاغری",
    desc: "من از نتایج خدمات لاغری کلینیک بهرویان بسیار راضی هستم. فرآیند درمان کاملاً حرفه‌ای بود و تیم پزشکی همیشه در دسترس بودند.",
    img: "/images/نظرات بیمار 3.png",
  },
  {
    title: "آقای کریمی | خدمات پوست",
    desc: "کیفیت خدمات پوست در کلینیک بهرویان واقعاً بی‌نظیر است. از مشاوره اولیه تا پایان درمان، همه چیز عالی بود.",
    img: "/images/نظرات بیمار4.png",
  },
  {
    title: "خانم نوری | خدمات مو",
    desc: "خدمات مو در کلینیک بهرویان با استفاده از جدیدترین تکنولوژی‌ها انجام می‌شود و نتایج آن واقعاً چشمگیر است.",
    img: "/images/نظرات بیمار 5.png",
  },
  {
    title: "آقای صادقی | خدمات دندانپزشکی",
    desc: "تجربه من از خدمات دندانپزشکی در کلینیک بهرویان بسیار مثبت بود. پزشکان با دقت و حوصله کار خود را انجام دادند.",
    img: "/images/نظرات بیمار 6.png",
  },
  {
    title: "خانم حسینی | خدمات زیبایی بدن",
    desc: "من از خدمات زیبایی بدن در کلینیک بهرویان استفاده کردم و نتایج فوق‌العاده‌ای گرفتم. توصیه می‌کنم.",
    img: "/images/نظرات بیمار7.png",
  },
];

const TOTAL = items.length; // 7
const INTERVAL = 3000;
const STEP_DEG = 360 / TOTAL;

const RotatingCircle = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => prev + 1);
    }, INTERVAL);
    return () => clearInterval(timer);
  }, []);

  const activeIndex = step % TOTAL;
  const rotation = -step * STEP_DEG;

  return (
    <section
      style={{
        marginTop: "clamp(40px, 4vw, 70px)",
        marginBottom: "clamp(40px, 4vw, 70px)",
      }}
    >
      {/* Section title */}
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
        <div className="flex items-center justify-center gap-x-0 mx-auto" style={{ maxWidth: "clamp(300px, 45vw, 700px)" }}>
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

      <div
        style={{
          background: "rgba(154, 98, 247, 0.1)",
          paddingBlock: "clamp(40px, 4vw, 70px)",
          paddingInline: "clamp(16px, 3vw, 60px)",
          borderRadius: "clamp(20px, 2.5vw, 40px)",
        }}
      >
        <div className="grid grid-cols-12 gap-y-10 s1280:gap-y-0" style={{ columnGap: "clamp(20px, 3vw, 50px)" }}>
        {/* Right side - circle animation */}
        <div className="col-span-12 s1280:col-span-5 flex items-center justify-center">
          <div
            className="relative"
            style={{
              width: "clamp(280px, 28vw, 420px)",
              height: "clamp(280px, 28vw, 420px)",
            }}
          >
            {/* Dashed circle path - rotates with the ring */}
            <div
              className="absolute inset-0"
              style={{
                transform: `rotate(${rotation}deg)`,
                transition: "transform 1.5s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              <Image
                src="/images/دایره.svg"
                alt=""
                fill
                className="object-contain"
              />
            </div>

            {/* Center circle - shows active patient image */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[2] rounded-full overflow-hidden"
              style={{
                width: "clamp(80px, 8vw, 120px)",
                height: "clamp(80px, 8vw, 120px)",
                background: "rgba(154, 98, 247, 0.3)",
              }}
            >
              <Image
                src={items[activeIndex].img}
                alt={items[activeIndex].title}
                width={120}
                height={120}
                className="w-full h-full object-cover transition-opacity duration-700"
              />
            </div>

            {/* Rotating ring of patient circles */}
            <div
              className="absolute inset-0 z-[3]"
              style={{
                transform: `rotate(${rotation}deg)`,
                transition: "transform 1.5s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              {items.map((item, i) => {
                const angle = (i * 360) / TOTAL - 90;
                const rad = (angle * Math.PI) / 180;
                const isActive = i === activeIndex;
                const x = 50 + Math.cos(rad) * 49.8;
                const y = 50 + Math.sin(rad) * 49.8;
                const counterRotation = -rotation;

                return (
                  <div
                    key={i}
                    className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full overflow-hidden"
                    style={{
                      top: `${y}%`,
                      left: `${x}%`,
                      width: isActive ? "clamp(60px, 6vw, 90px)" : "clamp(40px, 4vw, 60px)",
                      height: isActive ? "clamp(60px, 6vw, 90px)" : "clamp(40px, 4vw, 60px)",
                      transform: `translate(-50%, -50%) rotate(${counterRotation}deg)`,
                      transition: "width 0.7s ease, height 0.7s ease, transform 1.5s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.7s ease",
                      background: isActive ? "rgba(154, 98, 247, 0.3)" : "#fff",
                      boxShadow: isActive
                        ? "0 0 0 3px rgba(154, 98, 247, 0.4), 0 4px 12px rgba(154, 98, 247, 0.3)"
                        : "0 2px 8px rgba(0,0,0,0.1)",
                    }}
                  >
                    <Image
                      src={item.img}
                      alt={item.title}
                      width={90}
                      height={90}
                      className="w-full h-full object-cover"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Left side - text content */}
        <div className="col-span-12 s1280:col-span-7 flex flex-col justify-center text-right">
          <h3
            className="font-bold text-[#333]"
            style={{
              fontSize: "clamp(16px, 1.5vw, 24px)",
              marginBottom: "clamp(12px, 1.2vw, 20px)",
              transition: "opacity 0.5s ease",
            }}
          >
            {items[activeIndex].title}
          </h3>
          <p
            className="text-[#666] leading-relaxed"
            style={{
              fontSize: "clamp(13px, 1.1vw, 17px)",
              transition: "opacity 0.5s ease",
            }}
          >
            {items[activeIndex].desc}
          </p>
          <div style={{ marginTop: "clamp(20px, 2vw, 32px)" }}>
            <a
              href="#"
              className="inline-flex items-center justify-center text-white font-bold"
              style={{
                background: "#9A62F7",
                paddingInline: "clamp(24px, 2.5vw, 40px)",
                paddingBlock: "clamp(10px, 1vw, 16px)",
                borderRadius: "100px",
                fontSize: "clamp(13px, 1.1vw, 17px)",
              }}
            >
              مشاهده ویدیو
            </a>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default RotatingCircle;
