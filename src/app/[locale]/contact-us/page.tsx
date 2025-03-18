import BranchContactCard from "@/components/contactus/branchContactCard";
import ContactForm from "@/components/contactus/contactForm";
import { Metadata } from "next";
export const metadata : Metadata = {
    title : "Azpo Contact us"
}
const ContactUs = () => {
  return (
    <>
      <div className="px-[10px] s430:px-[20px] s1280:px-[66px] s1400:px-[90px] s1728:px-[143px] s1920:px-[153px] mb-10 mt-24 s1280:mb-20 s1280:mt-32">
        <div>
          <div className="mb-5 s1280:mb-10">
            <h1 className="text-[#0CA5A5] text-[20px] s1280:text-[30px] font-bold s1728:text-[36px]">Contact Us</h1>
          </div>
          <div className="grid grid-cols-12 gap-y-5 s1280:gap-y-0 s1280:gap-x-10">
            <div className="order-2 s1280:order-1 col-span-12 s1280:col-span-5">
              <div className="flex-cen gap-x-2 mb-2">
                <hr className="border border-[#2E5A90] w-[30%] s1280:w-[35%] h-0" />
                <p className="w-[40%] s1280:w-[30%] text-[#0CA5A5] font-semibold text-[18px] s1512:text-[20px] s1728:text-[24px] text-center">
                  Our Branches
                </p>
                <hr className="border border-[#2E5A90] w-[30%] s1280:w-[35%] h-0" />
              </div>
              <div className="flex flex-col items-center justify-start gap-y-4">
                <BranchContactCard
                  branchName="Istanbul"
                  location="Kayabaşı Mahallesi, Adnan Menderes Bulvarı, No: 5/A, Blok: B3, Kat: 2, Daire: 12, Başakşehir/Istanbul"
                  mail="info@azpo.com"
                  phone="+ 90 545 555 0 555"
                />
                <BranchContactCard
                  branchName="Antalya"
                  location="Fener Mahallesi, Bülent Ecevit Bulvarı, Özdemir Plaza No: 42/1, 07230 Muratpaşa/Antalya"
                  mail="info@azpo.com"
                  phone="+ 90 545 555 0 555"
                />
                <BranchContactCard
                  branchName="Alanya"
                  location="Cumhuriyet Mahallesi, Keykubat Bulvarı 270A/14, Alanya/Antalya"
                  mail="info@azpo.com"
                  phone="+ 90 545 555 0 555"
                />
              </div>
            </div>
            <div className="order-1 s1280:order-2 col-span-12 s1280:col-span-7 bg-white rounded-[40px] p-5 pt-0 h-fit">
              <div className="flex-cen mb-4">
                <p className="text-[#0CA5A5] bg-[#0CA5A50D] rounded-t-[10px] rounded-b-[100px] h-[35px] w-[273px] s1280:w-[330px] s1512:w-[485px] s1280:h-10 s1512:h-[60px] flex-cen font-semibold s1280:text-[20px] s1512:text-[24px]">
                  Connect With Us
                </p>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ContactUs;
