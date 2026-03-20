"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface BlogItem {
  img: string;
  tag: string;
  tagColor: string;
  title: string;
  desc: string;
  date: string;
}

const blogs: BlogItem[] = [
  {
    img: "/images/blog/rules.jpg",
    tag: "زیبایی",
    tagColor: "#9A62F7",
    title: "8 قانون بعد از جراحی بینی",
    desc: "توجه بیشتر به زیبایی ظاهری در مردان و زنان به‌ویژه در دوره نوجوانی افزایش یافته است...",
    date: "14 آبان 1403",
  },
  {
    img: "/images/blog/Risky.jpg",
    tag: "سلامت",
    tagColor: "#E74C3C",
    title: "اگر بارداری پرخطر دارید...",
    desc: "بارداری‌های پرخطر مشکل مهمی هستند که جان مادر و نوزاد را تهدید می‌کنند...",
    date: "12 آبان 1403",
  },
  {
    img: "/images/blog/OVARY.jpg",
    tag: "پزشکی",
    tagColor: "#3498DB",
    title: "سندرم تخمدان پلی‌کیستیک",
    desc: "سندرم تخمدان پلی‌کیستیک که در زنان سنین باروری بسیار شایع است...",
    date: "3 آذر 1403",
  },
  {
    img: "/images/blog/Breast.jpg",
    tag: "جراحی",
    tagColor: "#E67E22",
    title: "زیبایی سینه درد گردن و کمر را کاهش می‌دهد",
    desc: "ساختار بزرگ سینه که عامل درد مزمن گردن و کمر است، می‌تواند باعث اختلال در وضعیت بدن شود...",
    date: "9 آذر 1403",
  },
];

const BlogSlider = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const totalDots = Math.ceil(blogs.length / 3);

  const scrollToIndex = (index: number) => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.scrollWidth / blogs.length;
      scrollRef.current.scrollTo({
        left: cardWidth * index * 3,
        behavior: "smooth",
      });
    }
    setActiveIndex(index);
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.scrollWidth / blogs.length;
      const scrollLeft = scrollRef.current.scrollLeft;
      const index = Math.round(scrollLeft / (cardWidth * 3));
      setActiveIndex(Math.min(index, totalDots - 1));
    }
  };

  useEffect(() => {
    const ref = scrollRef.current;
    if (ref) {
      ref.addEventListener("scroll", handleScroll);
      return () => ref.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const scrollPrev = () => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.querySelector("article")?.offsetWidth || 320;
      scrollRef.current.scrollBy({ left: -(cardWidth + 24), behavior: "smooth" });
    }
  };

  const scrollNext = () => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.querySelector("article")?.offsetWidth || 320;
      scrollRef.current.scrollBy({ left: cardWidth + 24, behavior: "smooth" });
    }
  };

  return (
    <section style={{ marginTop: "clamp(40px, 4vw, 70px)", marginBottom: "clamp(40px, 4vw, 70px)" }}>
      {/* Title */}
      <div className="text-center" style={{ marginBottom: "clamp(24px, 2.5vw, 40px)" }}>
        <h2
          className="font-bold text-[#333333]"
          style={{
            fontSize: "clamp(18px, 2.2vw, 35px)",
            marginBottom: "clamp(16px, 1.5vw, 20px)",
          }}
        >
          بلاگ بهرویان
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

      {/* Slider */}
      <div className="relative">
        {/* Left arrow */}
        <button
          onClick={scrollPrev}
          className="absolute top-1/2 -translate-y-1/2 z-[5] hidden s1280:flex items-center justify-center rounded-full bg-[#F5B731] text-white shadow-lg hover:bg-[#e5a820] transition-colors"
          style={{ left: "-28px", width: "clamp(40px, 3.5vw, 52px)", height: "clamp(40px, 3.5vw, 52px)" }}
        >
          <IoIosArrowBack className="size-6" />
        </button>

        {/* Right arrow */}
        <button
          onClick={scrollNext}
          className="absolute top-1/2 -translate-y-1/2 z-[5] hidden s1280:flex items-center justify-center rounded-full bg-[#F5B731] text-white shadow-lg hover:bg-[#e5a820] transition-colors"
          style={{ right: "-28px", width: "clamp(40px, 3.5vw, 52px)", height: "clamp(40px, 3.5vw, 52px)" }}
        >
          <IoIosArrowForward className="size-6" />
        </button>

        {/* Cards container */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto scroll-hide snap-x snap-mandatory pb-4"
          style={{ scrollbarWidth: "none", gap: "clamp(16px, 2vw, 28px)" }}
        >
          {blogs.map((blog, i) => (
            <article
              key={i}
              className="flex-shrink-0 snap-start bg-white overflow-hidden flex flex-col cursor-pointer group"
              style={{
                width: "clamp(260px, 28vw, 380px)",
                borderRadius: "clamp(16px, 1.5vw, 24px)",
                boxShadow: "0 2px 16px rgba(0,0,0,0.07)",
              }}
            >
              {/* Image */}
              <div
                className="relative w-full overflow-hidden"
                style={{ height: "clamp(170px, 17vw, 240px)" }}
              >
                <Image
                  src={blog.img}
                  alt={blog.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 1280px) 80vw, 30vw"
                />
              </div>

              {/* Content */}
              <div
                className="flex flex-col flex-1"
                style={{ padding: "clamp(14px, 1.5vw, 22px)" }}
              >
                {/* Tag */}
                <span
                  className="inline-block w-fit font-medium rounded-md"
                  style={{
                    color: blog.tagColor,
                    border: `1.5px solid ${blog.tagColor}`,
                    fontSize: "clamp(11px, 0.85vw, 13px)",
                    padding: "3px 12px",
                    marginBottom: "clamp(10px, 1vw, 14px)",
                  }}
                >
                  {blog.tag}
                </span>

                {/* Title */}
                <h3
                  className="font-bold text-[#333] line-clamp-1 text-right"
                  style={{
                    fontSize: "clamp(14px, 1.2vw, 18px)",
                    marginBottom: "clamp(6px, 0.6vw, 10px)",
                  }}
                >
                  {blog.title}
                </h3>

                {/* Description */}
                <p
                  className="text-[#777] leading-relaxed line-clamp-3 text-right text-justify"
                  style={{
                    fontSize: "clamp(12px, 0.95vw, 14px)",
                    marginBottom: "clamp(12px, 1.2vw, 18px)",
                  }}
                >
                  {blog.desc}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between mt-auto">
                  <span
                    className="text-[#999]"
                    style={{ fontSize: "clamp(11px, 0.85vw, 13px)" }}
                  >
                    {blog.date}
                  </span>
                  <button
                    className="text-[#F5B731] font-bold border border-[#F5B731] rounded-md hover:bg-[#F5B731] hover:text-white transition-colors"
                    style={{
                      fontSize: "clamp(11px, 0.85vw, 13px)",
                      padding: "4px 14px",
                    }}
                  >
                    بیشتر بخوانید
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex items-center justify-center gap-x-2" style={{ marginTop: "clamp(16px, 1.5vw, 24px)" }}>
        {Array.from({ length: totalDots }).map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToIndex(i)}
            className="rounded-full transition-all duration-300"
            style={{
              width: activeIndex === i ? "14px" : "10px",
              height: activeIndex === i ? "14px" : "10px",
              backgroundColor: activeIndex === i ? "#F5B731" : "#D9D9D9",
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default BlogSlider;
