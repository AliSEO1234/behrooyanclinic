import Image from "next/image";

const items = [
  {
    icon: "/images/شماره 1.svg",
    title: "همکاری با برترین پزشکان",
    desc: "ما با جمعی از بهترین و شناخته‌شده‌ترین پزشکان زیبایی در تهران همکاری می‌کنیم تا هر مراجعه‌کننده، خدماتی ایمن، استاندارد و حرفه‌ای دریافت کند.",
  },
  {
    icon: "/images/شماره 2.svg",
    title: "تجربه و تخصص واقعی",
    desc: "با بیش از ۱۱ سال سابقه در حوزه زیبایی، خدمات ما توسط پزشکان مجرب و متخصص در تهران ارائه می‌شود. تا بهترین نتایج را برای مراجعین خود رقم بزنیم.",
  },
  {
    icon: "/images/شماره 3.svg",
    title: "استفاده از پیشرفته‌ترین تجهیزات",
    desc: "تمامی خدمات در کلینیک ما با استفاده از جدیدترین دستگاه‌ها و تکنولوژی‌های روز دنیا انجام می‌شود تا نتایج سریع‌تر، دقیق‌تر و ماندگارتر باشند.",
  },
  {
    icon: "/images/شماره 4.svg",
    title: "ضایت بالا و نتایج قابل اعتماد",
    desc: "رضایت بالای مراجعین و نتایج موفق، مهم‌ترین سرمایه ماست. ما متعهد هستیم تا بهترین تجربه را از شروع تا پایان درمان برای شما فراهم کنیم.",
  },
];

const WhyChooseUs = () => {
  return (
    <section style={{ marginTop: "clamp(40px, 4vw, 70px)", marginBottom: "clamp(40px, 4vw, 70px)" }}>
      {/* Section title */}
      <div className="text-center" style={{ marginBottom: "clamp(24px, 2.5vw, 40px)" }}>
        <h2
          className="font-bold text-[#333333]"
          style={{
            fontSize: "clamp(18px, 2.2vw, 35px)",
            marginBottom: "clamp(16px, 1.5vw, 20px)",
          }}
        >
          چرا ما را انتخاب کنید؟
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
          paddingBlock: "clamp(30px, 3vw, 50px)",
          paddingInline: "clamp(16px, 3vw, 60px)",
          borderRadius: "clamp(20px, 2.5vw, 40px)",
        }}
      >
        <div className="grid grid-cols-12 gap-y-8 s1280:gap-y-0" style={{ columnGap: "clamp(20px, 3vw, 50px)" }}>
        {/* Right side - items */}
        <div
          className="col-span-12 s1280:col-span-7 flex flex-col justify-between"
          style={{ gap: "clamp(16px, 1.5vw, 24px)" }}
        >
          {items.map((item, i) => (
            <div
              key={i}
              className="relative bg-white/70 backdrop-blur-sm"
              style={{
                padding: "clamp(16px, 1.5vw, 24px) clamp(70px, 7vw, 110px) clamp(16px, 1.5vw, 24px) clamp(20px, 2vw, 32px)",
                borderRadius: "100px",
                border: "1px solid rgba(154, 98, 247, 0.15)",
              }}
            >
              {/* Icon - overlapping on the right edge */}
              <div
                className="absolute top-1/2 -translate-y-1/2"
                style={{
                  right: "clamp(8px, 1vw, 16px)",
                  width: "clamp(55px, 5.5vw, 85px)",
                  height: "clamp(55px, 5.5vw, 85px)",
                }}
              >
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={99}
                  height={99}
                  className="w-full h-full"
                />
              </div>
              {/* Text */}
              <div className="text-right">
                <h3
                  className="font-bold text-[#333] mb-1"
                  style={{ fontSize: "clamp(15px, 1.3vw, 22px)" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-[#666] leading-relaxed"
                  style={{ fontSize: "clamp(12px, 1vw, 16px)" }}
                >
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Left side - doctor image */}
        <div className="col-span-12 s1280:col-span-5 flex items-center justify-center">
          <div
            className="relative w-full overflow-hidden"
            style={{
              borderRadius: "clamp(20px, 2vw, 30px)",
              maxWidth: "clamp(300px, 30vw, 500px)",
            }}
          >
            <Image
              src="/images/چرا ما را انتخاب کنید.svg"
              alt="چرا ما را انتخاب کنید - کلینیک بهرویان"
              width={500}
              height={700}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
