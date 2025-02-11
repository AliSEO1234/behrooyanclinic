import BranchCard from "./branchCard";
import p1 from "@/assets/images/about/about/p1.jpeg";
import p2 from "@/assets/images/about/about/p2.jpg";
import p3 from "@/assets/images/about/about/p3.jpg";
import p4 from "@/assets/images/about/about/p4.jpeg";
const OurBranches = () => {
  const photoList = [p1, p2, p3, p4];
  return (
    <>
      <div className="mb-10 s1280:mb-20">
        <p className="text-center font-medium s1280:text-[20px] s1280:leading-[36px] text-[#474744] s1280:px-20 s1512:px-40">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.Lorem Ipsum is simply dummy text of the printing and
          typesetting industry.Lorem Ipsum is simply dummy text of the printing
          and typesetting industry.Lorem Ipsum is simply dummy text of the
          printing and typesetting industry.Lorem Ipsum is simply dummy text of
          the printing and typesetting industry.Lorem Ipsum is simply dummy text
          of the printing and typesetting industry
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
