import bgSub from "@/assets/images/subTreatment/bgSub.svg";
import eye from "@/assets/images/subTreatment/eye.jpg";
import ImgFetcher from "@/components/imgFetcher";
import VideoTab from "@/features/subTreat/videoTab";
const Page = () => {
  return (
    <div>
      <div className="grid grid-cols-12 s1280:mt-36 viewport-p rounded-b-[40px] shadow-[0px_19px_29px_-25px_#00000011]">
        <div className="col-span-12 s1280:col-span-7 s1728:col-span-6">
          <div>
            <h1 className="font-semibold s1280:text-[30px] s1512:text-[36px] s1600:text-[40px] [text-shadow:0px_1px_4px_#00000025] text-[#00979A] s1512:mb-10 s1600:mb-20 s1728:mb-14">LASIK <br /> (Laser-Assisted in Situ Keratomileusis)</h1>
            <p className="font-medium s1280:text-[20px] s1600:text-[24px] s1728:text-[28px] s1280:leading-[40px] s1728:leading-[45px] s1280:pe-40 s1512:pe-52 text-justify text-[#474744]">
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
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 s1280:w-[248px] s1280:h-[402px] s1512:w-[350px] s1512:h-[550px] s1728:w-[400px] s1728:h-[650px] rounded-[500px] overflow-hidden shadow-[0px_4px_10.7px_3px_#00000042]">
              <ImgFetcher src={eye} />
            </div>
          </div>
        </div>
      </div>
      {/* content */}
      <div className="viewport-p">
        <div>
          <div className="flex-left">
              <h2 className="font-semibold s1280:text-[40px]">Videos <span className="font-medium s1280:text-[25px]">(21 item)</span></h2>
          </div>
          <VideoTab />
        </div>
      </div>
    </div>
  );
};
export default Page;
