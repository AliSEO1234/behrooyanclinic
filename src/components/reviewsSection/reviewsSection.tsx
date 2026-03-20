"use client";
import { useEffect, useRef } from "react";
import { FaStar } from "react-icons/fa";
import Image from "next/image";

type Review = {
  name: string;
  date: string;
  rating: number;
  text: string;
  initial: string;
  initialColor: string;
};

const reviews: Review[] = [
  {
    name: "مونا باباجانیان",
    date: "۷ فروردین ۱۴۰۴",
    rating: 5,
    text: "تیمی فوق‌العاده، قابل اعتماد و صمیمی. مشتاقانه منتظر همکاری دوباره با آن‌ها هستم.",
    initial: "م",
    initialColor: "bg-[#9A62F7]",
  },
  {
    name: "عارف علی",
    date: "۳۰ تیر ۱۴۰۱",
    rating: 5,
    text: "با چندین شرکت در استانبول کار کرده بودم، اما احساس آرامش و راحتی واقعی را فقط اینجا تجربه کردم. کل فرآیند بسیار حرفه‌ای بود.",
    initial: "ع",
    initialColor: "bg-[#4285F4]",
  },
  {
    name: "عبدالکریم موسی ایوب",
    date: "۳۰ تیر ۱۴۰۱",
    rating: 5,
    text: "آقای علی بنیان‌گذار این مجموعه در سال ۲۰۱۹ به من کمک کرد. ایشان فردی قابل اعتماد هستند و من ایشان را به شدت توصیه می‌کنم.",
    initial: "ع",
    initialColor: "bg-[#4285F4]",
  },
  {
    name: "محمد آلوکلا",
    date: "۱۷ فروردین ۱۴۰۴",
    rating: 5,
    text: "این مجموعه بیش از ۵ ستاره لایق دارد. اخیراً تجربه‌ای فوق‌العاده داشتم و می‌توانم با اطمینان بگویم روندی بسیار روان و حرفه‌ای بود.",
    initial: "م",
    initialColor: "bg-[#9A62F7]",
  },
  {
    name: "آیدا علی‌مولا",
    date: "۳۰ تیر ۱۴۰۱",
    rating: 5,
    text: "با چندین شرکت در استانبول سروکار داشتیم، اما حس آرامش درونی و راحتی را فقط در اینجا تجربه کردیم.",
    initial: "آ",
    initialColor: "bg-[#34A853]",
  },
  {
    name: "محمد قزوینی",
    date: "۳۰ تیر ۱۴۰۱",
    rating: 5,
    text: "بهترین مجموعه درمانی در ترکیه. به هر کسی که قصد درمان دارد توصیه می‌کنم — پشیمان نخواهید شد.",
    initial: "م",
    initialColor: "bg-[#9A62F7]",
  },
  {
    name: "سارا احمدی",
    date: "۱۲ آذر ۱۴۰۳",
    rating: 5,
    text: "در آذرماه برای درمان مراجعه کردیم. آقای دکتر با احترام و مهربانی رفتار کرد و تمام تلاش خود را برای رضایت ما انجام داد.",
    initial: "س",
    initialColor: "bg-[#EA4335]",
  },
  {
    name: "حسین رضایی",
    date: "۵ بهمن ۱۴۰۳",
    rating: 5,
    text: "خدمات بسیار عالی بود و تیم با صبر و حوصله تمام سوالات ما را پاسخ دادند. تجربه‌ای رضایت‌بخش.",
    initial: "ح",
    initialColor: "bg-[#FBBC05]",
  },
  {
    name: "نیلوفر کریمی",
    date: "۲۰ دی ۱۴۰۳",
    rating: 5,
    text: "از ابتدای مشاوره تا پایان درمان، همه چیز حرفه‌ای و منظم بود. بسیار ممنونم از تیم بهرویان.",
    initial: "ن",
    initialColor: "bg-[#34A853]",
  },
  {
    name: "رضا محمدی",
    date: "۱۵ اسفند ۱۴۰۳",
    rating: 5,
    text: "کیفیت خدمات فوق‌العاده بود. هماهنگی عالی و پشتیبانی مداوم. قطعاً دوباره مراجعه خواهم کرد.",
    initial: "ر",
    initialColor: "bg-[#4285F4]",
  },
  {
    name: "فاطمه نوری",
    date: "۸ بهمن ۱۴۰۳",
    rating: 5,
    text: "یکی از بهترین تجربه‌های درمانی من بود. تیم بسیار دلسوز و حرفه‌ای عمل کردند.",
    initial: "ف",
    initialColor: "bg-[#EA4335]",
  },
];

const col1 = [reviews[0], reviews[3], reviews[6], reviews[9]];
const col2 = [reviews[1], reviews[4], reviews[7], reviews[10]];
const col3 = [reviews[2], reviews[5], reviews[8]];

const ReviewCard = ({ review }: { review: Review }) => (
  <div className="bg-white rounded-[16px] s1280:rounded-[20px] p-4 s1280:p-5 flex flex-col shadow-[0px_1px_8px_#0000000A] border border-[#F0F0F0]">
    {/* Top: stars + text */}
    <div>
      <div className="flex items-center gap-x-1 mb-3 s1280:mb-4">
        {Array.from({ length: review.rating }).map((_, i) => (
          <FaStar key={i} className="text-[#FBBC05] size-[14px] s1280:size-[15px]" />
        ))}
      </div>
      <p className="text-[#444] text-[12px] s1280:text-[13px] s1512:text-[14px] leading-[22px] s1280:leading-[24px] s1512:leading-[26px] line-clamp-5">
        &ldquo;{review.text}&rdquo;
      </p>
    </div>

    {/* Bottom: user info */}
    <div className="flex items-center gap-x-2.5 mt-3">
      <div
        className={`w-[30px] h-[30px] s1280:w-[34px] s1280:h-[34px] rounded-full ${review.initialColor} flex items-center justify-center text-white font-bold text-[12px] s1280:text-[13px] flex-shrink-0`}
      >
        {review.initial}
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-[12px] s1280:text-[13px] text-[#333] truncate">
          {review.name}
        </p>
        <p className="text-[10px] s1280:text-[11px] text-[#999]">{review.date}</p>
      </div>
      <Image
        src="/images/google-icon.svg"
        alt="Google"
        width={20}
        height={20}
        className="w-[18px] h-[18px] s1280:w-[20px] s1280:h-[20px] flex-shrink-0"
      />
    </div>
  </div>
);

const ScrollColumn = ({
  reviews,
  speed,
}: {
  reviews: Review[];
  speed: number;
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>(0);
  const positionRef = useRef(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const animate = () => {
      positionRef.current += speed;
      const halfHeight = el.scrollHeight / 2;
      if (positionRef.current >= halfHeight) {
        positionRef.current -= halfHeight;
      }
      el.style.transform = `translateY(-${positionRef.current}px)`;
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationRef.current);
  }, [speed]);

  return (
    <div className="overflow-hidden flex-1">
      <div ref={scrollRef} className="flex flex-col gap-y-4 s1280:gap-y-5 will-change-transform">
        {[...reviews, ...reviews].map((review, i) => (
          <ReviewCard key={i} review={review} />
        ))}
      </div>
    </div>
  );
};

const ReviewsSection = () => {
  return (
    <section className="relative z-[2]" style={{ marginBottom: "clamp(40px, 4vw, 60px)" }}>
      {/* Label */}
      <div className="text-center" style={{ marginBottom: "clamp(16px, 1.5vw, 20px)" }}>
        <span className="inline-block bg-white rounded-full px-5 py-2 font-medium text-[#3D4F5F] border border-[#E5E9ED] shadow-[0px_1px_6px_#0000000A]" style={{ fontSize: "clamp(12px, 1vw, 14px)" }}>
          نظرات مشتریان
        </span>
      </div>

      {/* Title with icon */}
      <div className="text-center" style={{ marginBottom: "clamp(24px, 2.5vw, 32px)" }}>
        <h2 className="font-bold text-[#333333]" style={{ fontSize: "clamp(15px, 2.2vw, 35px)", marginBottom: "clamp(16px, 1.5vw, 20px)" }}>
          از مشتریان راضی ما در سراسر ایران بشنوید
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

      {/* Reviews - narrower centered container */}
      <div className="mx-auto" style={{ maxWidth: "clamp(320px, 70vw, 1100px)" }}>
        <div className="relative overflow-hidden" style={{ height: "clamp(480px, 42vw, 640px)" }}>
          {/* Top fade */}
          <div className="absolute top-0 left-0 right-0 z-[3] pointer-events-none" style={{ height: "clamp(100px, 10vw, 160px)", background: "linear-gradient(to bottom, #FCFCFC 0%, #FCFCFC 20%, rgba(252,252,252,0.8) 50%, rgba(252,252,252,0) 100%)" }} />
          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 z-[3] pointer-events-none" style={{ height: "clamp(140px, 14vw, 220px)", background: "linear-gradient(to top, #FCFCFC 0%, #FCFCFC 15%, rgba(252,252,252,0.9) 30%, rgba(252,252,252,0.6) 55%, rgba(252,252,252,0.2) 80%, rgba(252,252,252,0) 100%)" }} />

          {/* Columns */}
          <div className="flex gap-x-4 s1280:gap-x-5 h-full pt-4">
            <ScrollColumn reviews={col1} speed={0.4} />
            <ScrollColumn reviews={col2} speed={0.25} />
            <ScrollColumn reviews={col3} speed={0.4} />
          </div>
        </div>
      </div>

      {/* Bottom link */}
      <div className="flex justify-center mt-6 s1280:mt-8">
        <a
          href="https://www.google.com/maps/place/Azpo+Health"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-x-2 bg-white rounded-full px-6 py-3 shadow-[0px_1px_10px_#0000000A] border border-[#F0F0F0] hover:shadow-[0px_2px_16px_#0000001A] transition-shadow"
        >
          <Image
            src="/images/google-icon.svg"
            alt="Google"
            width={20}
            height={20}
            className="w-[18px] h-[18px] s1280:w-[20px] s1280:h-[20px]"
          />
          <span className="text-[13px] s1280:text-[14px] font-medium text-[#4285F4]">
            مشاهده تمام ۵۳ نظر در گوگل
          </span>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-[#4285F4]">
            <path d="M5.5 2L3 2L3 12H11V9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 2H12V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 2L6.5 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default ReviewsSection;
