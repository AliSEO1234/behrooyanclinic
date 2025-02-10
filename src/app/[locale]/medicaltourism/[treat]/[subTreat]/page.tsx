import bgSub from "@/assets/images/subTreatment/bgSub.svg";
import eye from "@/assets/images/subTreatment/eye.jpg";
import ImgFetcher from "@/components/imgFetcher";
import VideoTab from "@/features/subTreat/videoTab";
import benefitIcon from "@/assets/images/subTreatment/benefits.svg";
import BenefCard from "@/components/benefits/benefCard";
import BenefBorder from "@/components/benefits/benefBorder";
import person from "@/assets/images/subTreatment/person.svg";
import consider from "@/assets/images/subTreatment/consider.svg";
import mask from "@/assets/images/subTreatment/mask.svg";
// import consulphone from "@/assets/images/subTreatment/consulphone.svg"

import consulPerson from "@/assets/images/subTreatment/consulPerson.svg";
import personDocChar from "@/assets/images/subTreatment/consulPersonmedar.svg";
import admin1 from "@/assets/images/subTreatment/wom1.jpg";
import admin2 from "@/assets/images/subTreatment/wom2.jpg";
import admin3 from "@/assets/images/subTreatment/wom3.jpg";
import admin4 from "@/assets/images/subTreatment/men1.jpg";
import pile from "@/assets/images/subTreatment/pile.svg";
import drag from "@/assets/images/subTreatment/drag.svg";
import BFSwiper from "@/features/BF/BFSwiper";
import ConsultationAdmin from "@/components/consultationAdmin";
const Page = () => {
  return (
    <div>
      <div className="grid grid-cols-12 gap-y-3 s1280:gap-y-0 mt-14 s1280:mt-36 viewport-p rounded-b-[40px] shadow-[0px_19px_29px_-25px_#00000011]">
        <div className="col-span-12 s1280:col-span-7 s1728:col-span-6">
          <div>
            <h1 className="font-semibold text-[20px] s1280:text-[30px] s1512:text-[36px] s1600:text-[40px] [text-shadow:0px_1px_4px_#00000025] text-[#00979A] s1512:mb-10 s1600:mb-20 s1728:mb-14">
              LASIK <br /> (Laser-Assisted in Situ Keratomileusis)
            </h1>
            <p className="font-medium hidden s1280:block s1280:text-[20px] s1600:text-[24px] s1728:text-[28px] s1280:leading-[40px] s1728:leading-[45px] s1280:pe-40 s1512:pe-52 text-justify text-[#474744]">
              LASIK is a laser eye surgery that reshapes the cornea to improve
              how light enters the eye. The surgeon creates a flap on the
              cornea, uses a laser to reshape it, and then repositions the flap.
              It starts with the anesthesia of the eye tissue with anesthetic
              drops. In this way, the patient does not feel anything during the
              surgery. The improvement in vision begins to give satisfactory
              results within 3-5 days.
            </p>
          </div>
        </div>
        <div className="col-span-12 s1280:col-span-5 s1728:col-span-6 flex items-center justify-center s1600:justify-end">
          <div className="s1280:w-[450px] s1280:h-[420px] s1512:w-[600px] s1512:h-[550px] s1600:w-[700px] s1600:h-[550px] s1728:w-[750px] s1728:h-[650px] relative">
            <ImgFetcher src={bgSub} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[233px] h-[336px] s1280:w-[248px] s1280:h-[402px] s1512:w-[350px] s1512:h-[550px] s1728:w-[400px] s1728:h-[650px] rounded-[500px] overflow-hidden shadow-[0px_4px_10.7px_3px_#00000042]">
              <ImgFetcher src={eye} />
            </div>
          </div>
        </div>
        <div className="col-span-12 s1280:hidden">
          <p className="font-medium s1280:hidden text-justify text-[#474744]">
            LASIK is a laser eye surgery that reshapes the cornea to improve how
            light enters the eye. The surgeon creates a flap on the cornea, uses
            a laser to reshape it, and then repositions the flap. It starts with
            the anesthesia of the eye tissue with anesthetic drops. In this way,
            the patient does not feel anything during the surgery. The
            improvement in vision begins to give satisfactory results within 3-5
            days.
          </p>
        </div>
      </div>
      {/* content */}
      <div className="viewport-p">
        {/* video */}
        <div className="mb-[18px] s1280:mb-[13px] s1512:mb-20">
          <div className="flex-left">
            <h2 className="font-semibold text-[20px] s1280:text-[40px]">
              Videos{" "}
              <span className="font-medium s1280:text-[25px]">(21 item)</span>
            </h2>
          </div>
          <VideoTab />
        </div>
        {/* benefits */}
        <div className="s1512:h-full flex gap-y-[18px] s1280:gap-y-0 s1280:flex-col flex-wrap s1512:flex-nowrap items-center s1512:flex-row s1512:justify-start s1512:items-end s1512:gap-x-[44px] mb-10 s1280:mb-[16px] s1512:mb-24">
          <div className="s1512:h-full flex items-center justify-between gap-x-4 s1280:gap-x-0 s1512:justify-start s1512:items-end w-full s1512:gap-x-[14px] s1512:w-fit">
            <div className="flex flex-col items-start">
              <div className="w-full">
                <h2 className="font-bold text-[20px] s1280:text-[40px] s1600:text-[48px] text-center [text-shadow:0px_3px_2.8px_#00000040]">
                  Benefits
                </h2>
              </div>
              <div className="s1280:h-[463px] s1280:w-[220px]">
                <ImgFetcher src={benefitIcon} />
              </div>
            </div>
            <div className="s1512:h-full flex flex-col items-center gap-y-[18px] s1280:gap-y-0 s1280:flex-row s1280:items-center s1280:justify-end s1512:flex-col s1512:justify-between s1512:gap-y-[72px]">
              <BenefCard
                desc="Most patients notice vision improvement within a day, with full clarity in about a week."
                title="Rapid Recovery"
              />
              <BenefBorder />
              <BenefCard
                desc="Significantly decreases or eliminates the need for glasses or contact lenses."
                title="Reduced Dependency"
              />
              <BenefBorder />
              <BenefCard
                desc="Most patients notice vision improvement within a day, with full clarity in about a week."
                title="Precision"
              />
            </div>
          </div>
          <div className="bg-[#DAEDE645] rounded-[40px] p-4 s1280:p-9 w-full flex flex-col gap-y-16 s1512:h-[680px] s1512:pe-12 s1600:pe-28">
            {/* category */}
            <div className="text-[#474744]">
              <div className="mb-8 s1280:mb-5">
                <h4 className="flex-left gap-x-4 s1280:gap-x-5 font-medium text-[20px] s1920:text-[24px]">
                  <span className="w-[18px] h-[39px]">
                    <ImgFetcher src={person} />
                  </span>
                  <span>Who is it suitable for?</span>
                </h4>
              </div>
              <ul className="font-normal flex flex-col gap-y-6 relative">
                {/* border dashed */}
                <li className="h-full w-[18px] absolute top-2 left-0 flex items-start justify-center z-[1] pb-4">
                  <div className="w-0 h-full border-[1px] border-dashed border-[#000000]"></div>
                </li>
                <li className="text-[14px] s1512:text-[20px] s1920:text-[23px] z-[2] flex items-start justify-start gap-x-4 relative ps-8 s1280:ps-8">
                  <span className="absolute top-2 left-0 w-[18px] flex-cen">
                    <span className="w-[10px] h-[10px] bg-[#00CCA1] rounded-full border border-[#474744]"></span>
                  </span>
                  <span>
                    Adults (18–40) with stable vision for at least a year.
                  </span>
                </li>
                <li className="text-[14px] s1512:text-[20px] s1920:text-[23px] z-[2] flex items-start justify-start gap-x-4 relative ps-8 s1280:ps-8">
                  <span className="absolute top-2 left-0 w-[18px] flex-cen">
                    <span className="w-[10px] h-[10px] bg-[#00CCA1] rounded-full border border-[#474744]"></span>
                  </span>
                  <span>
                    Those with mild to moderate refractive errors and adequate
                    corneal thickness.
                  </span>
                </li>
                <li className="text-[14px] s1512:text-[20px] s1920:text-[23px] z-[2] flex items-start justify-start gap-x-4 s1512:gap-x-5 relative ps-8 s1280:ps-8">
                  <span className="absolute top-2 left-0 w-[18px] flex-cen">
                    <span className="w-[10px] h-[10px] bg-[#00CCA1] rounded-full border border-[#474744]"></span>
                  </span>
                  <span>
                    Not suitable for individuals with progressive eye
                    conditions, severe refractive errors, or certain medical
                    conditions like keratoconus or autoimmune diseases.
                  </span>
                </li>
              </ul>
            </div>
            {/* category */}
            <div className="text-[#474744]">
              <div className="mb-8 s1280:mb-5">
                <h4 className="flex-left gap-x-4 s1280:gap-x-5 font-medium text-[20px] s1920:text-[24px]">
                  <span className="w-[18px] h-[39px]">
                    <ImgFetcher src={consider} />
                  </span>
                  <span>Considerations</span>
                </h4>
              </div>
              <ul className="font-normal flex flex-col gap-y-6 relative">
                <li className="h-full w-[18px] absolute top-2 left-0 flex items-start justify-center z-[1] pb-4">
                  <div className="w-0 h-full border-[1px] border-dashed border-[#000000]"></div>
                </li>
                <li className="text-[14px] s1280:text-[16px] s1512:text-[20px] s1920:text-[23px] flex items-start justify-start gap-x-4 z-[2] ps-8 relative s1280:ps-8">
                  <span className="absolute top-1 s1280:top-2 left-0 w-[18px] flex-cen">
                    <span className="w-[10px] h-[10px] bg-[#00CCA1] rounded-full border border-[#474744]"></span>
                  </span>
                  <span>
                    <strong>Potential Risks: </strong>Dry eyes, glare, or halos
                    around lights, typically temporary.
                  </span>
                </li>
                <li className="text-[14px] s1280:text-[16px] s1512:text-[20px] s1920:text-[23px] flex items-start justify-start gap-x-4 s1512:gap-x-5 z-[2] ps-8 relative s1280:ps-8">
                  <span className="absolute top-1 s1280:top-2 left-0 w-[18px] flex-cen">
                    <span className="w-[10px] h-[10px] bg-[#00CCA1] rounded-full border border-[#474744]"></span>
                  </span>
                  <span>
                    <strong>Not Suitable For:</strong> Thin corneas, high
                    refractive errors, or individuals with eye infections or
                    severe dry eye syndrome.
                  </span>
                </li>
                <li className="text-[14px] s1280:text-[16px] s1512:text-[20px] s1920:text-[23px] flex items-start justify-start gap-x-4 s1512:gap-x-5 z-[2] ps-8 relative s1280:ps-8">
                  <span className="absolute top-1 s1280:top-2 left-0 w-[18px] flex-cen">
                    <span className="w-[10px] h-[10px] bg-[#00CCA1] rounded-full border border-[#474744]"></span>
                  </span>
                  <span>
                    <strong>Post-Surgery Care:</strong> Patients must avoid
                    rubbing their eyes and follow prescribed care for optimal
                    healing.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/*  Conclusion */}
        <div className="relative bg-consul s1280:h-[394px] z-[2] ">
          <div className="z-[3]">
            <div className="flex items-start justify-center s1280:mb-20 bg-consul-phone h-[95px]">
              <h2 className="font-semibold text-[20px] s1280:text-[40px] bg-gradient-to-r from-[#666666] to-[#3EBB9A] inline-block text-transparent bg-clip-text relative h-[3]">
                Conclusion
                <div className="absolute top-[100%] -right-[42%] s1280:top-[108%] s1280:-right-[32%] w-[53px] h-[40px] s1280:w-fit s1280:h-fit -translate-x-1/2 -translate-y-1/2">
                  <ImgFetcher src={mask} />
                </div>
                <div className="w-[2px] h-[4px] s1280:w-[5px] s1280:h-[7.48px] bg-[#43B194] absolute top-1/2 right-[5%] s1280:right-[6.5%] -translate-x-1/2 -translate-y-1/2"></div>
              </h2>
            </div>
            <div>
              <p className="font-medium s1280:text-[20px] text-center s1280:px-32 s1512:px-44 s1600:px-56 s1728:px-64 text-[#474744] leading-[30px] z-[3]">
                LASIK is a safe, effective, and life-changing procedure for
                those with refractive errors. With high success rates, most
                patients achieve 20/20 or better vision, making it one of the
                most popular vision correction methods worldwide. While not
                everyone is a candidate, for those who are, it offers a quick
                recovery and long-lasting results.
              </p>
            </div>
          </div>
        </div>
        {/* before && after */}
        <div className="s1280:mb-20">
          <div className="font-bold flex-left relative w-fit mb-5">
            <h2 className="s1280:text-[48px]">Before</h2>
            <div className="bg-gradient-to-r from-[#FCFCFC] via-[#3EBB9A] to-[#FCFCFC] s1280:w-[140px] w-[80px] h-[2px] s1280:h-[6px] -rotate-45 absolute top-[58%] left-[42%] s1280:top-[55%] s1280:left-[42%] -translate-x-1/2 -translate-y-1/2"></div>
            <h2 className="text-[30px] s1280:text-[96px] text-[#3EBB9A] [text-shadow:0px_3px_2.8px_#00000040] mt-7 -ms-2 s1280:-ms-6 s1280:mt-20">
              After
            </h2>
          </div>
          <div>
            <BFSwiper />
          </div>
          <div className="-mt-64 hidden s1280:block">
            <div className="mb-5">
              <ImgFetcher src={pile} />
            </div>
            <div className="mb-4">
              <p className="text-center font-normal text-[#7E7D7D]">
                Drag the Pill to explore more Patient
              </p>
            </div>
            <div className="flex-cen">
              <div className="s1280:w-[66px] h-[56px]">
                <ImgFetcher src={drag} />
              </div>
            </div>
          </div>
        </div>
        {/* Free consultation */}
        <div>
          <div className="flex-bet s1280:mb-5">
            <hr className="s1280:w-[32%] h-0 border-[2px] border-dashed border-[#333333]" />
            <h2 className="font-semibold s1280:text-[40px] flex items-start justify-center gap-x-4">
              <span className="s1280:w-[38px] s1280:h-[48px] block">
                <ImgFetcher src={consulPerson} />
              </span>
              <span>Free consultation</span>
            </h2>
            <hr className="s1280:w-[32%] h-0 border-[2px] border-dashed border-[#333333]" />
          </div>
          <div className="flex-cen">
            <div className="s1280:w-[450px] s1280:h-[450px] border-[3px] border-[#33333380] rounded-full relative s1280:p-20">
              {/* admins */}
              <ConsultationAdmin img={admin3} positionStyle="top-5 left-8" />
              <ConsultationAdmin img={admin1} positionStyle="bottom-5 right-8" />
              {/* inside dashed border */}
              <div className="w-full h-full border-[3px] border-dashed border-[#33333380] rounded-full relative s1280:p-16">
              <ConsultationAdmin img={admin2} positionStyle="top-0 right-3" />
              <ConsultationAdmin img={admin4} positionStyle="bottom-0 left-3" />
                {/* inside doctor char */}
                <div className="w-full h-full border-[3px] border-[#33333380] rounded-full p-4">
                    <ImgFetcher src={personDocChar} />
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page;
