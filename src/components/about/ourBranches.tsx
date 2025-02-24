import BranchCard from "./branchCard";
import p1 from "@/assets/images/about/about/p1.jpeg";
import p2 from "@/assets/images/about/about/p2.jpg";
import p3 from "@/assets/images/about/about/p3.jpg";
import p4 from "@/assets/images/about/about/p4.jpeg";
import { BranchComType } from "@/types/about/aboutPageType";
const OurBranches = ({locale} : BranchComType) => {
  const photoList = [p1, p2, p3, p4];
  return (
    <>
      <div className="mb-10 s1280:mb-20">
        <p className="text-center font-medium s1280:text-[20px] s1280:leading-[36px] text-[#474744] s1280:px-20 s1512:px-40">
          {
            locale === "ru" ? "Мы делаем всё возможное, чтобы ваше лечение в Турции было комфортным и безопасным, взяв на себя все организационные вопросы. Индивидуальный подход к каждому пациенту и тщательная проработка всех деталей — основа нашей работы, обеспечивающая вам уверенность в каждом шаге на пути к здоровью." : "ceive top-quality medical services. Thanks to our wide-reaching partnerships, patients can choose to be treated in any city across Turkey, accessing the best hospitals and specialists suited to their needs. Our dedicated team of experienced doctors, medical professionals, and expert patient coordinators is always by your side, guiding you through every step of the process to ensure a seamless and stress-free experience"
          }
        </p>
      </div>
      <div className="s1728:px-20 s1920:px-32">
        <BranchCard
          desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry"
          locationAddress="Lorem Ipsum is simply dummy text of the printing and typesetting"
          phone="+ 90 545 555 0 555"
          photoList={photoList}
          title="Alanya branch"
        />
        <BranchCard
          desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry"
          locationAddress="Lorem Ipsum is simply dummy text of the printing and typesetting"
          phone="+ 90 545 555 0 555"
          photoList={photoList}
          title="Alanya branch"
        />
        <BranchCard
          desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry"
          locationAddress="Lorem Ipsum is simply dummy text of the printing and typesetting"
          phone="+ 90 545 555 0 555"
          photoList={photoList}
          title="Alanya branch"
        />
        <BranchCard
          desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry"
          locationAddress="Lorem Ipsum is simply dummy text of the printing and typesetting"
          phone="+ 90 545 555 0 555"
          photoList={photoList}
          title="Alanya branch"
        />
      </div>
    </>
  );
};
export default OurBranches;
