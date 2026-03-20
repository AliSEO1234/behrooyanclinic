import Image from "next/image";
import TreatmentTimeline from "@/components/treatmentTimeline/treatmentTimeline";
import ReviewsSection from "@/components/reviewsSection/reviewsSection";
import VideoPlayerCom from "@/features/videoPlayer/videoPlayer";
import ScrollServices from "@/components/services/scrollServices";
import RotatingCircle from "@/components/rotatingCircle/rotatingCircle";
import InstagramSection from "@/components/instagramSection/instagramSection";
import WhyChooseUs from "@/components/whyChooseUs/whyChooseUs";
import BlogSlider from "@/components/blogSlider/blogSlider";
import PatientVideoReviews from "@/components/reviewsSection/patientVideoReviews";
import ComplimentaryConsultationForm from "@/features/complimentaryConsultationForm";
const Home = async ({
  params,
}: {
  params: Promise<{
    locale: string;
  }>;
}) => {
  const { locale } = await params;
  return (
    <div dir="rtl" lang="fa" className="font-yekan-bakh">
      <section
        className="viewport-size first-section"
        aria-labelledby="health-heading"
      >
        <VideoPlayerCom />
        {/* Consultation form overlay */}
        <div className="relative z-[3] w-full flex flex-col items-center s1280:my-auto">
          <span
            className="inline-block text-[#9A62F7] font-bold text-center"
            style={{
              fontSize: "clamp(12px, 1.1vw, 17px)",
              paddingInline: "clamp(16px, 2vw, 30px)",
              paddingBlock: "clamp(6px, 0.6vw, 10px)",
              borderRadius: "clamp(20px, 2vw, 40px)",
              marginBottom: "clamp(12px, 1.2vw, 20px)",
              background: "rgba(255, 255, 255, 0.65)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
            }}
          >
            فرم مشاوره رایگان
          </span>
          <ComplimentaryConsultationForm />
        </div>
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 z-[3] pointer-events-none" style={{ height: "40px", background: "linear-gradient(to top, #FCFCFC 0%, rgba(252,252,252,0.5) 40%, rgba(252,252,252,0.2) 70%, transparent 100%)" }} />
      </section>
      {/* Slogan + scroll icon */}
      <div className="flex flex-col items-center px-4" style={{ gap: "clamp(8px, 1vw, 12px)", paddingBottom: "clamp(24px, 2.5vw, 32px)", marginTop: "clamp(-64px, -4vw, -96px)" }}>
        <a href="#services-section" className="cursor-pointer relative z-[4]">
          <Image
            src="/images/b2b-scroll.svg"
            alt="scroll"
            width={32}
            height={63}
            priority
            className="animate-bounce h-auto"
            style={{ width: "clamp(24px, 2vw, 32px)" }}
          />
        </a>
      </div>
      <section id="services-section" className="viewport-size">
        <section className="z-[2] relative" style={{ marginBottom: "clamp(40px, 4vw, 60px)" }}>
          <div className="text-center" style={{ marginBottom: "clamp(24px, 2.5vw, 32px)" }}>
            <h2 className="font-bold text-[#333333]" style={{ fontSize: "clamp(15px, 2.2vw, 35px)", marginBottom: "clamp(16px, 1.5vw, 20px)" }}>
              خدمات کلینیک بهرویان
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
          <ScrollServices />
        </section>
        {/* مسیر سلامت خود را تماشا کنید */}
        <section className="relative z-[2]" style={{ marginBottom: "clamp(40px, 4vw, 60px)" }}>
          <div className="text-center" style={{ marginBottom: "clamp(24px, 2.5vw, 32px)" }}>
            <h2 className="font-bold text-[#333333]" style={{ fontSize: "clamp(15px, 2.2vw, 35px)", marginBottom: "clamp(16px, 1.5vw, 20px)" }}>
              چرا باید کلینیک بهرویان را انتخاب کنید؟
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
          <div className="flex-cen relative">
            {/* Right logo */}
            <div className="hidden s1280:block absolute top-1/2 -translate-y-1/2 z-[1]" style={{ right: "calc(50% - min(445px, 35vw) - clamp(106px, 10vw, 160px))" }}>
              <Image
                src="/images/Behrooyan-Logo.svg"
                alt=""
                width={350}
                height={350}
                className="opacity-20"
                style={{ width: "clamp(160px, 16vw, 319px)", height: "clamp(160px, 16vw, 319px)" }}
              />
            </div>
            {/* Left logo */}
            <div className="hidden s1280:block absolute top-1/2 -translate-y-1/2 z-[1]" style={{ left: "calc(50% - min(445px, 35vw) - clamp(106px, 10vw, 160px))" }}>
              <Image
                src="/images/Behrooyan-Logo.svg"
                alt=""
                width={350}
                height={350}
                className="opacity-20 -scale-x-100"
                style={{ width: "clamp(160px, 16vw, 319px)", height: "clamp(160px, 16vw, 319px)" }}
              />
            </div>
            <video
              controls
              preload="metadata"
              className="object-cover relative z-[2]"
              style={{ width: "clamp(280px, 70vw, 890px)", height: "clamp(160px, 39vw, 501px)", borderRadius: "clamp(16px, 2vw, 30px)" }}
            >
              <source src="/videos/Video Project 11.mp4" type="video/mp4" />
            </video>
          </div>
        </section>
        {/* مسیر درمان شما */}
        <TreatmentTimeline />
        {/* نظرات کاربران */}
        <ReviewsSection />
        {/* چرا ما را انتخاب کنید؟ */}
        <WhyChooseUs />
        {/* بلاگ بهرویان */}
        <BlogSlider />
        {/* اینستاگرام کلینیک بهرویان */}
        <InstagramSection />
        {/* نظرات بیماران - ویدیویی */}
        <PatientVideoReviews />
        {/* نظرات مشتریان - دایره چرخشی */}
        <RotatingCircle />
      </section>
    </div>
  );
};
export default Home;
