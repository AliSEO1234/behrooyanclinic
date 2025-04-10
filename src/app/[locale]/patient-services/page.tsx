import PatientServicesForm from "@/components/forms/patient-services/patientServicesForm";
import health from "@/assets/images/healthlogo.png";
import ImgFetcher from "@/components/imgFetcher";
import VideoPlayer from "@/features/services/videoPlayer/videoPlayer";
import { patientServices } from "@/staticData/patientServices/patientServicesData";
import PatientServicCard from "@/components/patientServices/patientServicCard";
type PatientServicesType = {
  params: Promise<{ locale: string }>;
};
const PatientServices = async ({ params }: PatientServicesType) => {
  const { locale } = await params;
  return (
    <div className="viewport-p">
      {/* header */}
      <div className="mt-16 s1280:mt-32 mb-20">
        <div className="grid grid-cols-12 s1280:gap-x-5 mb-60 s1280:mb-10">
          <div className="hidden s1280:block s1280:col-span-5"></div>
          <div className="col-span-12 s1280:col-span-7 s1512:mb-10 px-4 s1280:px-0">
            <h1 className="text-[#00979A] font-semibold text-[20px] s1280:text-[30px] s1512:text-[40px] s1728:text-[48px] mb-4 s1280:relative flex-left gap-x-3 s1280:block">
              <div className="w-8 h-8 s1280:w-[46px] s1280:h-[46px] s1512:w-[57px] s1512:h-[57px] s1728:w-[72px] s1728:h-[72px] flex-cen s1280:absolute s1280:top-1/2 s1280:-translate-x-1/2 s1280:right-full s1280:-translate-y-1/2">
                <ImgFetcher width={1000} height={1000} src={health} />
              </div>
              PATIENT SERVICES
            </h1>
            <p className="text-[#474744] font-medium leading-[182%] s1512:text-[18px] s1728:text-[20px] s1280:pe-10 s1728:pe-40 s1920:pe-44">
            Health is the most valuable and essential aspect of life. At Azpo Health, we prioritize your well-being and ensure that your healthcare journey takes place under the best possible conditions. Our goal is to provide a seamless treatment process by meeting every need a patient may have.<br />
            From the very first moment, our services begin with a pre-consultation and continue with 24/7 support, even after the patient returns to their home country. Throughout the treatment process, we offer accommodation, transportation, and visa assistance, along with optional city tours for those interested.<br />
            Experience a flawless, stress-free, and comfortable treatment journey with Azpo Health!

            </p>
          </div>
        </div>
        <PatientServicesForm />
      </div>
      {/* content */}
      <div>
        <div className="flex-cen relative mb-20 s1280:mb-32 w-full">
          <VideoPlayer
            className="w-full s1280:w-[916px] s1280:h-[501px]"
            src={
              locale === "ru"
                ? "https://azpo.com/api/files/property-videos/site_health.mp4"
                : "https://azpo.com/api/files/property-videos/site_health_en.mp4"
            }
          />
        </div>
        {/* services */}
        <div className="flex flex-col items-center justify-start gap-y-20">
          {patientServices.map(({ desc, label, photos }, index) => {
            return (
              <PatientServicCard
                key={index}
                count={index + 1}
                desc={desc}
                label={label}
                photos={photos}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default PatientServices;
